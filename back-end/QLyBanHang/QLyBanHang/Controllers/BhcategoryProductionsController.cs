using System;
using System.Collections.Generic;
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
    public class BhcategoryProductionsController : ControllerBase
    {
        private readonly QlyBanHangContext _context;

        public BhcategoryProductionsController(QlyBanHangContext context)
        {
            _context = context;
        }

        // GET: api/BhcategoryProductions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BhcategoryProduction>>> GetBhcategoryProductions()
        {
          if (_context.BhcategoryProductions == null)
          {
              return NotFound();
          }
            return await _context.BhcategoryProductions.ToListAsync();
        }

        // GET: api/BhcategoryProductions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BhcategoryProduction>> GetBhcategoryProduction(string id)
        {
          if (_context.BhcategoryProductions == null)
          {
              return NotFound();
          }
            var bhcategoryProduction = await _context.BhcategoryProductions.FindAsync(id);

            if (bhcategoryProduction == null)
            {
                return NotFound();
            }

            return bhcategoryProduction;
        }

        // PUT: api/BhcategoryProductions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBhcategoryProduction(string id, BhcategoryProduction bhcategoryProduction)
        {
            if (id != bhcategoryProduction.Id)
            {
                return BadRequest();
            }

            _context.Entry(bhcategoryProduction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BhcategoryProductionExists(id))
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

        // POST: api/BhcategoryProductions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BhcategoryProduction>> PostBhcategoryProduction(BhcategoryProduction bhcategoryProduction)
        {
          if (_context.BhcategoryProductions == null)
          {
              return Problem("Entity set 'QlyBanHangContext.BhcategoryProductions'  is null.");
          }
            _context.BhcategoryProductions.Add(bhcategoryProduction);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (BhcategoryProductionExists(bhcategoryProduction.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetBhcategoryProduction", new { id = bhcategoryProduction.Id }, bhcategoryProduction);
        }

        // DELETE: api/BhcategoryProductions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBhcategoryProduction(string id)
        {
            if (_context.BhcategoryProductions == null)
            {
                return NotFound();
            }
            var bhcategoryProduction = await _context.BhcategoryProductions.FindAsync(id);
            if (bhcategoryProduction == null)
            {
                return NotFound();
            }

            _context.BhcategoryProductions.Remove(bhcategoryProduction);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BhcategoryProductionExists(string id)
        {
            return (_context.BhcategoryProductions?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
