using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class BhserviceInvoiceReceiptMaster
{
    public string Id { get; set; }

    public DateTime? Cdate { get; set; }

    public string Username { get; set; }

    public decimal? Total { get; set; }

    public string Note { get; set; }
}
