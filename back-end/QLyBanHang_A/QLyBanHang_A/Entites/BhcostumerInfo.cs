using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhcostumerInfo
{
    public string Id { get; set; } = null!;

    public string? Fullname { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public DateTime? c_date { get; set; }

    public DateTime? Birthday { get; set; }

    public string? Address { get; set; }

    public string? Gender { get; set; }

    public string? Rank { get; set; }

    public decimal? TotalPayment { get; set; }
}
