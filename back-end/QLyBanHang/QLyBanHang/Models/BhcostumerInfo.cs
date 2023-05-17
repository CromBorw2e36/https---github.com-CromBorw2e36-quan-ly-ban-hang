using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhcostumerInfo
{
    public string Id { get; set; }

    public string Fullname { get; set; }

    public string Phone { get; set; }

    public string Email { get; set; }

    public DateTime? CDate { get; set; }

    public DateTime? Birthday { get; set; }

    public string Address { get; set; }

    public string Gender { get; set; }

    public string Rank { get; set; }

    public decimal? TotalPayment { get; set; }
}
