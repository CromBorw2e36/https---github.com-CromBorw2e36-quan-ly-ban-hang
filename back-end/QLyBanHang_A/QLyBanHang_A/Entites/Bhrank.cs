using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class Bhrank
{
    public string Id { get; set; } = null!;

    public string? ShortKey { get; set; }

    public string? Name { get; set; }

    public decimal? PricePersion { get; set; }
}
