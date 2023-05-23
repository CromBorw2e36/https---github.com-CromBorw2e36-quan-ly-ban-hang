using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLyBanHang_A.Models;

namespace QLyBanHang_A.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BhBillController : ControllerBase
    {

        [HttpPost("BillMaster_Ins")]
        public async Task<ActionResult> BillMaster_Ins(List<BillDetail> BillDetails){
            return Ok(BillDetails);
        }

    }
}
