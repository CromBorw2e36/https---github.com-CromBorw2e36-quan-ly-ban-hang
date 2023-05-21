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
    public class SysMenuRolesController : ControllerBase
    {
        private readonly QlyBanHangContext _context;

        public SysMenuRolesController(QlyBanHangContext context)
        {
            _context = context;
        }


        [Route("GetSysMenuRole")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<SysMenuRole>>> GetSysMenuRole(account accountUser)
        {
          if(accountUser.Permision != null){

                var SysMenuRole = await _context.SysMenuRoles.Where<SysMenuRole>(p => p.PermisionCode == accountUser.Permision).OrderBy(p => p.NumberOrder).ToListAsync();
                return Ok(SysMenuRole);
            }
            return BadRequest();
        }


        [Route("SysRoleRightGet")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<SysRoleRigh>>> SysRoleRightGet(SysRoleRigh roleRight)
        {
            
            if(roleRight.Menuid != null && roleRight.Menuid.Length > 0)
            {
                var qSysRoleRight = await _context.SysRoleRighs.Where(p=> p.Menuid == roleRight.Menuid).OrderBy(p=> p.MenuStt).ToListAsync();
                return Ok(qSysRoleRight);
            }

            return Ok(new Message() { status = 0, message = "Menuid Trống!"});
        }

        [HttpPost("SysRawTableGet")]
        public async Task<ActionResult<SysRawTable>> SysRawTableGet(SysRawTable RawTable)
        {
            if(RawTable.MenuId != null && RawTable.MenuId.Length > 0)
            {
                var RawTables = await _context.SysRawTables.Where(p=> p.MenuId == RawTable.MenuId).OrderBy(p => p.NumberOrder).ToListAsync();

                return Ok(RawTables);
            }

            return BadRequest();
        }


        private bool SysMenuRoleExists(string id)
        {
            return (_context.SysMenuRoles?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
