using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using QLyBanHang_A.Entites;
using QLyBanHang_A.Models;
using QLyBanHang_A.Models.Login;

namespace QLyBanHang_A.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BHAccountsController : ControllerBase
    {

        enum PermisonAccount
        {
            ADMIN,
            SUPERADMIN,
            EMPLOYEE,
            UNKNOW
        }

        private readonly QlyBanHangContext _context;

        public BHAccountsController(QlyBanHangContext context)
        {
            _context = context;
        }

        [Route("AccountIns")]
        [HttpPost]
        public async Task<ActionResult> AccountIns(User account)
        {

            if (
                account != null
                && account.Username != null
                && account.Username.Length > 0
                && account.Password != null
                && account.Password.Length > 0
                && account.ma_ch != null
                && account.ma_ch.Length > 0
                )
            {
                var regexItem = new Regex("^[a-zA-Z0-9_]*$");

                if( !regexItem.IsMatch(account.Username) )
                {
                    return Ok(new Message() { status = 1, message = "Tên tài khoản ký tự đặt biệt" });
                }

                Bhaccount newAccount = new Bhaccount()
                {
                    Username = account.Username,
                    Password = account.Password,
                    c_date = DateTime.Now,
                    Enter = DateTime.Now,
                    Permision = PermisonAccount.UNKNOW.ToString(),
                    Ma_Ch = account.ma_ch != null ? account.ma_ch : ""
                };



                if (!BhaccountExists(account.Username))
                {
                    _context.Bhaccounts.Add(newAccount);

                    BhuserInfo newUserInfo = new BhuserInfo()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Username = newAccount.Username,
                        Fullname = newAccount.Username
                    };

                    _context.BhuserInfos.Add(newUserInfo);
                }
                else
                {
                    return Ok(new Message() { status = 0, message = "Tài khoản tồn tại" });
                }

                try
                {

                    _context.SaveChangesAsync().Wait();

                    return Ok(new Message() { status = 0, message = "Đăng kí tài khoản thành công" });
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());

                    return Ok(new Message() { status = 1, message = "Đăng ký tài khoản thất bại" });
                }
            }
            else if (account.Username.Length == 0 || account.Username == null)
                return Ok(new Message() { status = 1, message = "Tài khoản không được để trống" });
            else if(account.Password.Length <=5 || account.Password == null)
                return Ok(new Message() { status = 1, message = "Mật khẩu có từ 5 đến 25 ký tự" });
            else if (account.ma_ch.Length == 0 || account.ma_ch == null)
                return Ok(new Message() { status = 1, message = "Chưa chọn cửa hàng" });

            return BadRequest();
        }

        [HttpPost("AccountGets")]
        public async Task<ActionResult<IEnumerable<User>>> GetBhaccounts(User user)
        {
            Message message = new Message();

            if (user.Permision == PermisonAccount.ADMIN.ToString() || user.Permision == PermisonAccount.SUPERADMIN.ToString())
            {
                var users = await _context.Database.SqlQueryRaw<Bhaccount>($"EXEC procBHAccount_Get @p0", new[] { user.Username }).ToListAsync();

                return Ok(users);
            }

            return BadRequest();
        }

        [Route("Login")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<LoginM>>> Login(User user)
        {
            if (
                user.Username != null
                && user.Username != ""
                && user.Password != ""
                && user.Password != null
                )
            {

                var qUser = await _context.Bhaccounts.FirstOrDefaultAsync(p => p.Username == user.Username);

                if (qUser != null)
                {
                    if (qUser.Password == user.Password)
                    {
                        if (qUser.Status == "LOCK")
                        {
                            return Ok(new Message() { status = 1, message = "Tài khoản đã hết hạn hoặc bị khóa" });
                        }
                        else
                        {
                            var qUserInfo = await _context.BhuserInfos.FirstOrDefaultAsync<BhuserInfo>(p => p.Username == qUser.Username);
                            if (qUserInfo != null)
                            {
                                LoginM UserItem = new LoginM()
                                {
                                    Username = qUser.Username,
                                    Permision = qUser.Permision,
                                    ma_ch = qUser.Ma_Ch,
                                    Phone = qUser.Phone,
                                    fullname = qUserInfo.Fullname,
                                    images = qUserInfo.Image,
                                    status = 0,
                                    message = "Đăng nhập thành công"
                                };


                                return Ok(UserItem);
                            }
                            else
                            {
                                User MyAccount = new User()
                                {
                                    Username = qUser.Username,
                                    Permision = qUser.Permision,
                                    ma_ch = qUser.Ma_Ch,
                                    Fullname = qUser.Username
                                };

                                Message mess = new Message()
                                {
                                    status = 0,
                                    message = "Đăng nhập thành công"
                                };

                                return Ok(mess);
                            }
                        }
                    }
                    else
                    {
                        return Ok(new Message() { status = 1, message = "Sai tài mật khẩu" });
                    }
                }

            }

            return Ok(new Message() { status = 1, message = "Đăng nhập thất bại" });
        }

        [HttpPut("AccountUpd")]
        public async Task<IActionResult> AccountUpd(account bhaccount)
        {
            if (bhaccount.Username == null)
            {
                return BadRequest(new Message() { status = 1, message = "Không có tên tài khoản được gửi đi" });
            }

            if (!BhaccountExists(bhaccount.Username))
            {
                return Ok(new Message() { status = 1, message = "Tài khoản không tồn tại" });
            }

            var dbAccount = _context.Bhaccounts.Where<Bhaccount>(p=> p.Username == bhaccount.Username).FirstOrDefault();

            dbAccount.Phone = bhaccount.Phone != null ? bhaccount.Phone : dbAccount.Phone;

            dbAccount.Email = bhaccount.Email != null ? bhaccount.Email : dbAccount.Email;

            dbAccount.Permision = bhaccount.Permision != null ? bhaccount.Permision : dbAccount.Permision;

            dbAccount.Ma_Ch = bhaccount.ma_ch != null ? bhaccount.ma_ch : dbAccount.Ma_Ch;

            dbAccount.Password = bhaccount.Password != null ? bhaccount.Password : dbAccount.Password;

            dbAccount.Status = bhaccount.Status != null ? bhaccount.Status : dbAccount.Status;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BhaccountExists(bhaccount.Username))
                {
                    return Ok(new Message() { status = 1, message = "Tài khoản không tồn tại" });
                }
                else
                {
                    throw;
                }
            }

            return Ok(new Message() { status = 0, message = "Cập nhật tài khoản thành công" });
        }

        [HttpGet("UpdateEnter/{username}")]
        public async Task<ActionResult> UpdateEnter(string username)
        {
            if (username == null)
            {
                return BadRequest(new Message() { status = 1, message = "Không có tên tài khoản được gửi đi" });
            }

            if (BhaccountExists(username))
            {
                
                var account = _context.Bhaccounts.Where<Bhaccount>(p => p.Username == username).FirstOrDefault();

                if(account != null)
                {
                    account.Enter = DateTime.UtcNow.AddHours(7);
                }

                try
                {
                    await _context.SaveChangesAsync();

                    return Ok(new Message(0, "Cập nhật thành công"));
                }
                catch
                {
                    return BadRequest(new Message(1, "Cập nhật không thành công"));
                }
            }

            return BadRequest();
        }

        // DELETE: api/BHAccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBhaccount(string id)
        {
            if (_context.Bhaccounts == null)
            {
                return Ok(new Message() { status = 1, message = "Không có thông tin tài khoản" });
            }
            var bhaccount = await _context.Bhaccounts.FindAsync(id);
            if (bhaccount == null)
            {
                return Ok(new Message() { status = 1, message = "Không có thông tin tài khoản" });
            }

            _context.Bhaccounts.Remove(bhaccount);
            await _context.SaveChangesAsync();

            return Ok(new Message() { status = 0, message = "Cập nhật tài khoản thành công" });
        }

        private bool BhaccountExists(string id)
        {
            return (_context.Bhaccounts?.Any(e => e.Username == id)).GetValueOrDefault();
        }
    }
}
