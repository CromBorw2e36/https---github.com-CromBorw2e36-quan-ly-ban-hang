using System;
using System.Collections.Generic;

namespace QLyBanHang_A.Entites;

public partial class SysMenuRole
{
    public string? Id { get; set; }

    public string? Menuid { get; set; }

    public string? PermisionCode { get; set; }

    public string? Name { get; set; }

    public string? Link { get; set; }

    public DateTime? c_date { get; set; }

    public int? NumberOrder { get; set; }

    public string? MaCh { get; set; }

    public bool? Show { get; set; }

    public string? Component { get; set; }

    public string? Icon { get; set; }  

}
