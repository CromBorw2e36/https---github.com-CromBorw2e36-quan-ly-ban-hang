using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhbillMaster
{
    public string Id { get; set; }

    public string IdProduct { get; set; }

    public string IdCustomer { get; set; }

    public decimal? Price { get; set; }

    public decimal? PricePersent { get; set; }

    public decimal? TotalPrice { get; set; }

    public DateTime? CDate { get; set; }

    public string CUser { get; set; }

    public bool? Status { get; set; }

    public string Note { get; set; }
}
