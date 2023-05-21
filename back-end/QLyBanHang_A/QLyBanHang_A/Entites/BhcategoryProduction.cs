using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhcategoryProduction
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public bool? Status { get; set; }

    public DateTime? c_date { get; set; }

    public string? Username { get; set; }
}
