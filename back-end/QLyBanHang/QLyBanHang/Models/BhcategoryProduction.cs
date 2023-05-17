using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhcategoryProduction
{
    public string Id { get; set; }

    public string Name { get; set; }

    public bool? Status { get; set; }

    public DateTime? Cdate { get; set; }

    public string Username { get; set; }
}
