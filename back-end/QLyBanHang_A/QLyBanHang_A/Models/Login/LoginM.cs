namespace QLyBanHang_A.Models.Login
{
    public class LoginM
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime c_date { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public string Permision { get; set; }
        public string ma_ch { get; set; }
        public DateTime? Enter { get; set; }
        public string? fullname { get; set; }
        public string? images { get; set; }
        public int? status { get; set; }
        public string? Token { get; set; }

        public string? message { get; set; }
    }
}
