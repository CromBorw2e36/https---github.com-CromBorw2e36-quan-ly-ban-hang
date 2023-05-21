using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using QLyBanHang.Entitys;
using QLyBanHang.Models;

namespace QLyBanHang.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SysMenuRolesController : ControllerBase
    {
        private readonly QlyBanHangContext _context;

        public SysMenuRolesController(QlyBanHangContext context)
        {
            _context = context;
        }

        // GET: api/SysMenuRoles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SysMenuRole>>> GetSysMenuRoles()
        {
          if (_context.SysMenuRoles == null)
          {
              return NotFound();
          }
            return await _context.SysMenuRoles.ToListAsync();
        }

        // GET: api/SysMenuRoles/5
        [Route("SysMenuGet")]
        [HttpPost]
        public async Task<ActionResult<SysMenuRole>> GetSysMenuRole(Bhaccount account)
        {

           
          if (_context.SysMenuRoles == null)
          {
              return NotFound();
          }else if(account.Permision == null)
            {
                return Ok(new messageE() { status = 1, message = "Tài khoản không hợp lệ" });
               
            }

            var sysMenu = _context.SysMenuRoles.Where(p => p.PermisionCode == account.Permision).OrderBy(p => p.NumberOrder).ToList();

            if (sysMenu == null)
            {
                return NotFound();
            }

            return Ok(sysMenu);
        }

        // PUT: api/SysMenuRoles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSysMenuRole(string id, SysMenuRole sysMenuRole)
        {
            if (id != sysMenuRole.Id)
            {
                return BadRequest();
            }

            _context.Entry(sysMenuRole).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SysMenuRoleExists(id))
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

        // POST: api/SysMenuRoles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SysMenuRole>> PostSysMenuRole(SysMenuRole sysMenuRole)
        {
          if (_context.SysMenuRoles == null)
          {
              return Problem("Entity set 'QlyBanHangContext.SysMenuRoles'  is null.");
          }

            DateTime time = new DateTime(2023,05,18);

            _context.SysMenuRoles.Add(new SysMenuRole()
            {
                Id = UniqueId.CreateRandomId(),
                Name = sysMenuRole.Name,
                Cdate = time,
                Link = sysMenuRole.Link,
                MaCh = "001",
                NumberOrder = sysMenuRole.NumberOrder,
                PermisionCode = "EMPLOYEE",
            });
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SysMenuRoleExists(sysMenuRole.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSysMenuRole", new { id = sysMenuRole.Id }, sysMenuRole);
        }

        // DELETE: api/SysMenuRoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSysMenuRole(string id)
        {
            if (_context.SysMenuRoles == null)
            {
                return NotFound();
            }
            var sysMenuRole = await _context.SysMenuRoles.FindAsync(id);
            if (sysMenuRole == null)
            {
                return NotFound();
            }

            _context.SysMenuRoles.Remove(sysMenuRole);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SysMenuRoleExists(string id)
        {
            return (_context.SysMenuRoles?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
