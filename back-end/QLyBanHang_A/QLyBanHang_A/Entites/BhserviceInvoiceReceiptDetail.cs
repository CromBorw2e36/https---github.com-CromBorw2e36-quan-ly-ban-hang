using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhserviceInvoiceReceiptDetail
{
    public string Id { get; set; } = null!;

    public DateTime? c_date { get; set; }

    public string? Username { get; set; }

    public string? Title { get; set; }

    public string? Note { get; set; }

    public decimal? Price { get; set; }

    public decimal? TotalNumber { get; set; }

    public string? IdServiceInvoiceReceipt { get; set; }

    public string? IdCalculationUnit { get; set; }
}
