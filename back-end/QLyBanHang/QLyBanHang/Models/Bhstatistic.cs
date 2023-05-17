using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class Bhstatistic
{
    public string Id { get; set; }

    public string Name { get; set; }

    public string About { get; set; }

    public DateTime? Cdate { get; set; }

    public int? Month { get; set; }

    public int? Year { get; set; }

    public decimal? Incoming { get; set; }

    public decimal? Spending { get; set; }

    public decimal? Total { get; set; }

    public bool? IsRead { get; set; }

    public DateTime? Favorite { get; set; }
}
