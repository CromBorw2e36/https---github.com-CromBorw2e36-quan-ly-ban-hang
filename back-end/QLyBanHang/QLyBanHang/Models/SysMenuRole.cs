using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class SysMenuRole
{
    public string Id { get; set; }

    public string PermisionCode { get; set; }

    public string Name { get; set; }

    public string Link { get; set; }

    public DateTime? Cdate { get; set; }

    public string MaCh { get; set; }
}
