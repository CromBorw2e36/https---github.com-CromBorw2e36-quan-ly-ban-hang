using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class Bhstatus
{
    public string Id { get; set; } = null!;

    public string? ForTable { get; set; }

    public string? Name { get; set; }

    public string? ShortKey { get; set; }
}
