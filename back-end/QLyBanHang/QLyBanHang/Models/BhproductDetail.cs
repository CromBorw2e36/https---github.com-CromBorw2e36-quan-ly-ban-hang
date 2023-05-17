using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhproductDetail
{
    public string Id { get; set; }

    public string IdProduct { get; set; }

    public string Name { get; set; }

    public string About { get; set; }

    public int? Review { get; set; }

    public int? Total { get; set; }

    public decimal? Price { get; set; }

    public decimal? PricePersent { get; set; }

    public string Images { get; set; }
}
