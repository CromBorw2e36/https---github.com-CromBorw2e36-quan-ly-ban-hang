using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhproductMaster
{
    public string Id { get; set; } = null!;

    public DateTime? c_date { get; set; }

    public string? CUser { get; set; }

    public bool? Status { get; set; }

    public DateTime? EDate { get; set; }
}
