namespace QLyBanHang_A.Models
{
    public class Message
    {
        public int status { get; set; }

        public string message { get; set; }


        public Message()
        {

        }

        public Message(int status, string message)
        {
            this.status = status;
            this.message = message;
        }
    }
}
