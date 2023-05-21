using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QLyBanHang_A.Entites;
using QLyBanHang_A.Models;

namespace QLyBanHang_A.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BHUserInfoesController : ControllerBase
    {
        public enum PermisonAccount
        {
            ADMIN,
            SUPERADMIN,
            EMPLOYEE,
            UNKNOW
        }

        private readonly QlyBanHangContext _context;

        public BHUserInfoesController(QlyBanHangContext context)
        {
            _context = context;
        }

        //==> Lấy danh sách người dùng

        [HttpPost("UserInfoGet")]
        public async Task<ActionResult<User>> GetBhuserInfo(account accountAdmin)
        {

            if (
                accountAdmin != null
                && (

                     accountAdmin.Permision == PermisonAccount.ADMIN.ToString()
                    || accountAdmin.Permision == PermisonAccount.SUPERADMIN.ToString()

                    )
                 && accountAdmin.ma_ch.Length > 0
                 && AccountExits(accountAdmin.Username)
            )
            {
                var listUserInfo = await (from a in _context.Bhaccounts
                                          join b in _context.BhuserInfos on a.Username equals b.Username
                                          where
                                               b.Username != accountAdmin.Username
                                               && a.Ma_Ch == accountAdmin.ma_ch
                                               &&
                                               (
                                                   (
                                                       accountAdmin.Permision == "ADMIN"
                                                       && a.Permision != "SUPERADMIN"
                                                   )
                                                   || accountAdmin.Permision == "SUPERADMIN"
                                               )
                                          select new User
                                          {
                                              Username = a.Username,
                                              c_date = a.c_date,
                                              Phone = a.Phone,
                                              Email = a.Email,
                                              Permision = a.Permision,
                                              Status = a.Status,
                                              ma_ch = a.Ma_Ch,
                                              Fullname = b.Fullname,
                                              Image = b.Image,
                                              Birthday = b.Birthday,
                                              Gender = b.Gender,
                                              CCCD = b.Cccd,
                                              Id_Bike = b.IdBike,
                                              Note = b.Note,
                                              Enter = a.Enter
                                          }).OrderBy(p => p.c_date).ToListAsync<User>();

                return Ok(listUserInfo);
            }

            return Ok(new Message() { status = 1, message = "Không lấy được danh sách" });
        }


        [HttpPut]
        public async Task<ActionResult<Message>> UserInfoUpd(BhuserInfo user)
        {

            if (user.Id == null || user.Id == "")
            {
                return BadRequest();
            }

            var oldUserInfo = _context.BhuserInfos.FirstOrDefault(p => p.Id == user.Id);

            if (oldUserInfo == null)
            {
                return BadRequest();
            }

            BhuserInfo newUserInfo = new BhuserInfo()
            {
                Fullname = user.Fullname != oldUserInfo.Fullname ? user.Fullname : oldUserInfo.Fullname,
                Image = user.Image != oldUserInfo.Image ? user.Image : oldUserInfo.Image,
                Birthday = user.Birthday != oldUserInfo.Birthday ? user.Birthday : oldUserInfo.Birthday,
                Gender = user.Gender != oldUserInfo.Gender ? user.Gender : oldUserInfo.Gender,
                Address = user.Address != oldUserInfo.Address ? user.Address : oldUserInfo.Address,
                Cccd = user.Cccd != oldUserInfo.Cccd ? user.Cccd : oldUserInfo.Cccd,
                IdBike = user.IdBike != oldUserInfo.IdBike ? user.IdBike : oldUserInfo.IdBike,
                Note = user.Note != oldUserInfo.Note ? user.Note : oldUserInfo.Note
            };

            oldUserInfo.Fullname = newUserInfo.Fullname;
            oldUserInfo.Image = newUserInfo.Image;
            oldUserInfo.Birthday = newUserInfo.Birthday;
            oldUserInfo.Gender = newUserInfo.Gender;
            oldUserInfo.Address = newUserInfo.Address;
            oldUserInfo.Cccd = newUserInfo.Cccd;
            oldUserInfo.IdBike = newUserInfo.IdBike;
            oldUserInfo.Note = newUserInfo.Note;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BhuserInfoExists(user.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        private bool AccountExits(string username)
        {
            return (_context.Bhaccounts?.Any(e => e.Username == username)).GetValueOrDefault();
        }


        private bool BhuserInfoExists(string id)
        {
            return (_context.BhuserInfos?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
