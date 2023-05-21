using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhbillDetail
{
    public string Id { get; set; } = null!;

    public string? IdBill { get; set; }

    public string? IdProduct { get; set; }

    public decimal? TotalNumber { get; set; }

    public decimal? Price { get; set; }

    public decimal? PricePersent { get; set; }

    public decimal? TotalPrice { get; set; }
}
