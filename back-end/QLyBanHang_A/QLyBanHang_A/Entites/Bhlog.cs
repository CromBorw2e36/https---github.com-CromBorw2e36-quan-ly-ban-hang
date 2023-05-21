using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class Bhlog
{
    public string Id { get; set; } = null!;

    public string? DoWork { get; set; }

    public string? CUser { get; set; }

    public DateTime? c_date { get; set; }

    public string? Note { get; set; }
}
