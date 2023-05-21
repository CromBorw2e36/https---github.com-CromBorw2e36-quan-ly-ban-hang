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
    public class BHproductsController : ControllerBase
    {
        private readonly QlyBanHangContext _context;

        public BHproductsController(QlyBanHangContext context)
        {
            _context = context;
        }

        [HttpPost("ProductGet")]
        public async Task<ActionResult<Production>> ProductGet(Production product)
        {
            if(product.ma_ch == null)
            {
                return BadRequest();
            }


            if(!BhCompanyContactExits(product.ma_ch))
            {
                return Ok(new Message(1, "Cửa hàng không tồn tại"));
            }

            if (product.Id != null && BhproductMasterExists(product.Id))
            {
                var products = await _context.BhproductDetails.Where(p => p.Id == product.Id).OrderByDescending(p => p.C_Date).ToListAsync();

                if(products == null)
                {
                    return Ok(new Message(1, "Sản phẩm không tìm thấy"));
                }
                return Ok(products);

            }
            else if (product.Status == null)
            {
                var products = await _context.BhproductDetails.Where(p => p.ma_ch == product.ma_ch).OrderByDescending(p => p.C_Date).ToListAsync();

                return Ok(products);
            }
            else if (product.Status == true)
            {
                var products = await _context.BhproductDetails.Where(p => p.ma_ch == product.ma_ch && p.Status == true).OrderByDescending(p => p.C_Date).ToListAsync();

                return Ok(products);

            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("ProductIns")]
        public async Task<ActionResult> ProductIns(Production product)
        {
            if (product == null || product.ma_ch == null) { return BadRequest(); }

            if (product != null && BhCompanyContactExits(product.ma_ch))
            {
                BhproductDetail newProduct = new BhproductDetail();

                newProduct.Id = Guid.NewGuid().ToString();
                newProduct.Name = product.Name;
                newProduct.About = product.About;
                newProduct.Review = product.Review != null ? product.Review : 0;
                newProduct.Total = product.Total != null ? product.Total : 0;
                newProduct.Price = product.Price !=  null ? product.Price : 0;
                newProduct.PricePersent = product.PricePersent != null ? product.PricePersent : 0;
                newProduct.Images = product.Images;
                newProduct.C_Date = DateTime.UtcNow.AddHours(7);
                newProduct.C_User = product.C_User;
                newProduct.Status = product.Status != null ? product.Status : true;
                newProduct.Show = product.Show != null ? product.Show :true;
                newProduct.E_Date = DateTime.UtcNow.AddHours(7);
                newProduct.ma_ch = product.ma_ch;

                _context.BhproductDetails.Add(newProduct);

                try
                {

                    await _context.SaveChangesAsync();

                    return Ok(new Message(0, "Thêm sản phẩm thành công"));

                }
                catch (Exception ex)
                {
                    return Ok(new Message(1, "Thêm sản phẩm xảy ra lỗi"));
                }

            }
            else if (BhCompanyContactExits(product.ma_ch)) 
                return Ok(new Message(1, "Cửa hàng không tồn tại"));

            return BadRequest();
        }

        [HttpPut("ProductUpd")]
        public async Task<ActionResult> ProductUpd(Production product)
        {
            if (product == null || product.ma_ch == null) { return BadRequest(); }

            if (product != null && BhCompanyContactExits(product.ma_ch))
            {


                var oldProduct = _context.BhproductDetails.Where(p => p.Id ==  product.Id).FirstOrDefault();

                if(oldProduct == null)
                {
                    return Ok(new Message(1, "Sản phẩm không tồn tại"));
                }

                oldProduct.Name = product.Name != null ? product.Name : oldProduct.Name;
                oldProduct.About = product.About != null ? product.About : oldProduct.About;
                oldProduct.Review = product.Review != null ? product.Review : oldProduct.Review;
                oldProduct.Total = product.Total != null ? product.Total : oldProduct.Total;
                oldProduct.Price = product.Price != null ? product.Price : oldProduct.Price;
                oldProduct.PricePersent = product.PricePersent != null ? product.PricePersent : oldProduct.PricePersent;
                oldProduct.Images = product.Images != null ? product.Images : oldProduct.Images;
                oldProduct.C_User = product.C_User != null ? product.C_User : oldProduct.C_User;
                oldProduct.Status = product.Status != null ? product.Status : oldProduct.Status;
                oldProduct.Show = product.Show != null ? product.Show : oldProduct.Show;
                oldProduct.E_Date = DateTime.UtcNow.AddHours(7);
                oldProduct.ma_ch = product.ma_ch != null ? product.ma_ch : oldProduct.ma_ch;

                try
                {

                    await _context.SaveChangesAsync();

                    return Ok(new Message(0, "Lưu sản phẩm thành công"));

                }
                catch (Exception ex)
                {
                    return Ok(new Message(1, "Lưu sản phẩm xảy ra lỗi"));
                }

            }
            else if (BhCompanyContactExits(product.ma_ch))
                Ok(new Message(1, "Cửa hàng không tồn tại"));

            return BadRequest();
        }

        // DELETE: api/BhproductMasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBhproductMaster(string id)
        {
            if (_context.BhproductDetails == null)
            {
                return NotFound();
            }
            var BhproductDetail = await _context.BhproductDetails.FindAsync(id);
            if (BhproductDetail == null)
            {
                return NotFound();
            }

            _context.BhproductDetails.Remove(BhproductDetail);
            await _context.SaveChangesAsync();

            return Ok(new Message(0, "Đã xóa"));
        }


        private bool BhCompanyContactExits(string id)
        {
            return (_context.BhcompanyContacts?.Any(e => e.MaCh == id)).GetValueOrDefault();
        }

            private bool BhproductMasterExists(string id)
        {
            return (_context.BhproductDetails?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
