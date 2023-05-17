using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class Bhaccount
{
    public string Username { get; set; }

    public string Password { get; set; }

    public DateTime? CDate { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public int? Permision { get; set; }

    public int? Status { get; set; }
}
