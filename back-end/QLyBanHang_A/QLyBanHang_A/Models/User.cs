using QLyBanHang_A.Entites;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;
using System.Security;

namespace QLyBanHang_A.Models
{
    public class User
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
        
        public DateTime? c_date { get; set; }
        
        public string? Phone { get; set; }
        
        public string? Email { get; set; }
        public string? Permision { get; set; }
        public string? Status { get; set; }
        public string? ma_ch { get; set; }


        // id cua userinfo
        public string? Id { get; set; }
        public string? Fullname { get; set; }
        public string? Image { get; set; }
        public DateTime? Birthday { get; set; }
        
        public string? Gender { get; set; }

        public string? Address { get; set; }
        public string? CCCD { get; set; }
        public string? Id_Bike { get; set; }
        public string? Note { get; set; }
        public DateTime? Enter { get; set; }

    }
}
