using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhlostMoneyEmloyee
{
    public string Id { get; set; } = null!;

    public string? IdEmloyee { get; set; }

    public string? Why { get; set; }

    public decimal? LostMoney { get; set; }

    public string? Important { get; set; }
}
