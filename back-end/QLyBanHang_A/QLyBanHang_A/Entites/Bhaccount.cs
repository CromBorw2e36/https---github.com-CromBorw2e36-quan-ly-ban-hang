using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class Bhaccount
{
    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public DateTime? c_date { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public string? Permision { get; set; }

    public string? Status { get; set; }

    public string? Ma_Ch { get; set; }

    public DateTime? Enter { get; set; }
}
