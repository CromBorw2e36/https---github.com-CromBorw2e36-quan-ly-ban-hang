using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhsalaryEmloyee
{
    public string Id { get; set; } = null!;

    public string? Username { get; set; }

    public DateTime? WorkTime { get; set; }

    public decimal? SalaryHour { get; set; }

    public int? DayOffTotal { get; set; }

    public int? MaxDayOff { get; set; }

    public decimal? LostMoney { get; set; }

    public decimal? SalaryTotal { get; set; }

    public string? IdBonus { get; set; }

    public DateTime? c_date { get; set; }

    public string? Cusername { get; set; }
}
