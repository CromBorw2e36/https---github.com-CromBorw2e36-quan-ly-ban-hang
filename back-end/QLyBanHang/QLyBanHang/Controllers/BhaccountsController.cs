using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [Route("[controller]/getAll")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bhaccount>>> GetBhaccounts()
        {
           
          if (_context.Bhaccounts == null)
          {
              return NotFound();
          }
            return await _context.Bhaccounts.ToListAsync();
        }

        // GET: api/Bhaccounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bhaccount>> GetBhaccount(string id)
        {
          if (_context.Bhaccounts == null)
          {
              return NotFound();
          }
            var bhaccount = await _context.Bhaccounts.FindAsync(id);

            if (bhaccount == null)
            {
                return NotFound();
            }

            return bhaccount;
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
          if (_context.Bhaccounts == null)
          {
              return Problem("Entity set 'QlyBanHangContext.Bhaccounts'  is null.");
          }
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
            if (_context.Bhaccounts == null)
            {
                return NotFound();
            }
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
            return (_context.Bhaccounts?.Any(e => e.Username == id)).GetValueOrDefault();
        }
    }
}
