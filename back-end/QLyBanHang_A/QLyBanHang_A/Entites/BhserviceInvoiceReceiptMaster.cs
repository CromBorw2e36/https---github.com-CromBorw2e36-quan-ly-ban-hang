using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class BhserviceInvoiceReceiptMaster
{
    public string Id { get; set; } = null!;

    public DateTime? c_date { get; set; }

    public string? Username { get; set; }

    public decimal? Total { get; set; }

    public string? Note { get; set; }
}
