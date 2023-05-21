using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhcompanyContact
{
    public string Id { get; set; } = null!;

    public string? MaCh { get; set; }

    public string? Name { get; set; }

    public string? Address { get; set; }

    public string? Phone { get; set; }

    public DateTime? c_date { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public string? Usename { get; set; }

    public string? CUsername { get; set; }

    public string? Status { get; set; }

    public decimal? Price { get; set; }

    public string? TypeStore { get; set; }

    public string? Notes { get; set; }
}
