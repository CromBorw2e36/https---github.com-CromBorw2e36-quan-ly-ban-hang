using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhbillDetail
{
    public string Id { get; set; }

    public string IdBill { get; set; }

    public string IdProduct { get; set; }

    public decimal? TotalNumber { get; set; }

    public decimal? Price { get; set; }

    public decimal? PricePersent { get; set; }

    public decimal? TotalPrice { get; set; }
}
