using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhproductMaster
{
    public string Id { get; set; }

    public DateTime? CDate { get; set; }

    public string CUser { get; set; }

    public bool? Status { get; set; }

    public DateTime? EDate { get; set; }
}
