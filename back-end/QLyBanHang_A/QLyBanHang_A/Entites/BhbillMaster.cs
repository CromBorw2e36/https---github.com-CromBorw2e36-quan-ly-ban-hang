using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhbillMaster
{
    public string Id { get; set; } = null!;

    public string? IdProduct { get; set; }

    public string? IdCustomer { get; set; }

    public decimal? Price { get; set; }

    public decimal? PricePersent { get; set; }

    public decimal? TotalPrice { get; set; }

    public DateTime? c_date { get; set; }

    public string? C_User { get; set; }

    public bool? Status { get; set; }

    public string? Note { get; set; }
}
