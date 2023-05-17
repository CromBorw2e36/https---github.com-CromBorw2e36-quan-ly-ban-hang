using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using QLyBanHang.Models;

namespace QLyBanHang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BhaccountsController : ControllerBase
    {
        private readonly QlyBanHangContext _context;

        public BhaccountsController(QlyBanHangContext context)
        {
            _context = context;
        }

        // GET: api/Bhaccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bhaccount>>> GetBhaccounts()
        {
            return await _context.Bhaccounts.ToListAsync();
        }

        // GET: api/Bhaccounts/5
        [Route("Login")]
        [HttpPost]
        public async Task<ActionResult<Bhaccount>> GetBhaccount(Bhaccount bhaccount)
        {
            var bhaccountCheck = await _context.Bhaccounts.FindAsync(bhaccount.Username);
            if (bhaccountCheck == null)
            {
                return NotFound();
            }
            else if (bhaccountCheck.Password == bhaccount.Password)
            {

                return Ok(new {status = 0, message = "Đăng nhập thành công"});
            }
            else
            {

                return Ok(new { status = 1, message = "Đăng nhập thất bại" });
            }
        }

        // PUT: api/Bhaccounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBhaccount(string id, Bhaccount bhaccount)
        {
            if (id != bhaccount.Username)
            {
                return BadRequest();
            }

            _context.Entry(bhaccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BhaccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bhaccounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bhaccount>> PostBhaccount(Bhaccount bhaccount)
        {
            _context.Bhaccounts.Add(bhaccount);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BhaccountExists(bhaccount.Username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBhaccount", new { id = bhaccount.Username }, bhaccount);
        }

        // DELETE: api/Bhaccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBhaccount(string id)
        {
            var bhaccount = await _context.Bhaccounts.FindAsync(id);
            if (bhaccount == null)
            {
                return NotFound();
            }

            _context.Bhaccounts.Remove(bhaccount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BhaccountExists(string id)
        {
            return _context.Bhaccounts.Any(e => e.Username == id);
        }
    }
}
