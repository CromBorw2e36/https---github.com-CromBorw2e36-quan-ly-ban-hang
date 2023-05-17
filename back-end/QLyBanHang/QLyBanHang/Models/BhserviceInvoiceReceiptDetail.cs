using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhserviceInvoiceReceiptDetail
{
    public string Id { get; set; }

    public DateTime? Cdate { get; set; }

    public string Username { get; set; }

    public string Title { get; set; }

    public string Note { get; set; }

    public decimal? Price { get; set; }

    public decimal? TotalNumber { get; set; }

    public string IdServiceInvoiceReceipt { get; set; }

    public string IdCalculationUnit { get; set; }
}
