using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;
using System.Drawing;
using System.Security.Policy;

namespace QLyBanHang_A.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[HttpPost("UploadFileImageV1")]
    public class UploadFileController : ControllerBase
    {
        [HttpPost("UploadFileImageV1")]
        public async Task<IActionResult> OnPostUploadAsync(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
                
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.GetTempFileName();

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formFile.CopyToAsync(stream);

                    }
                    return Ok(new { filePath = filePath, size });

                }
            }

            return Ok(new { count = files, size });


            // Process uploaded files
            // Don't rely on or trust the FileName property without validation.

        }

        [HttpPost("UploadFileImageV2")]
        public async Task<IActionResult> OnPostUploadAsync2(IFormFile file)
        {

            if(file == null)
            {
                return Ok();
            }
            else
            {
                var filePath = Path.GetTempFileName();

                using (var stream = System.IO.File.Create(filePath))
                {
                    await file.CopyToAsync(stream);

                }

                return Ok(new { filePath = filePath });

            }

            return Ok(new { count = file });



            // Process uploaded files
            // Don't rely on or trust the FileName property without validation.

        }
    }
}
