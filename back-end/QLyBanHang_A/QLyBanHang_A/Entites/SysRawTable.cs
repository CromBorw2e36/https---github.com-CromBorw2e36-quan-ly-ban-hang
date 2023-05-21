using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class SysRawTable
{
    public string? Id { get; set; } 

    public string? MenuId { get; set; }

    public string? TableColumn { get; set; }

    public string? Name { get; set; }

    public string? NameEn { get; set; }

    public string? DataType { get; set; }

    public string? Align { get; set; }

    public Boolean? Show { get; set; }

    public int? NumberOrder { get; set; }

    public DateTime? CDate { get; set; }
    
    public string? CUser { get; set; }

}
