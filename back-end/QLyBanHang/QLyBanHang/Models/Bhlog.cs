using System;
using System.Collections.Generic;

namespace QLyBanHang.Models;

public partial class Bhlog
{
    public string Id { get; set; }

    public string DoWork { get; set; }

    public string CUser { get; set; }

    public DateTime? CDate { get; set; }

    public string Note { get; set; }
}
