using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class Bhstatistic
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public string? About { get; set; }

    public DateTime? c_date { get; set; }

    public int? Month { get; set; }

    public int? Year { get; set; }

    public decimal? Incoming { get; set; }

    public decimal? Spending { get; set; }

    public decimal? Total { get; set; }

    public bool? IsRead { get; set; }

    public DateTime? Favorite { get; set; }
}
