using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhuserInfo
{
    public string Id { get; set; }

    public string Username { get; set; }

    public string Fullname { get; set; }

    public string Image { get; set; }

    public DateTime? Birthday { get; set; }

    public string Gender { get; set; }

    public string Address { get; set; }

    public string Cccd { get; set; }

    public string IdBike { get; set; }

    public string Note { get; set; }
}
