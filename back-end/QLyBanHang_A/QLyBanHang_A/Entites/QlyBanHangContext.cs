using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace QLyBanHang_A.Entites;

public partial class QlyBanHangContext : DbContext
{
    public QlyBanHangContext()
    {
    }

    public QlyBanHangContext(DbContextOptions<QlyBanHangContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bhaccount> Bhaccounts { get; set; }

    public virtual DbSet<BhbillDetail> BhbillDetails { get; set; }

    public virtual DbSet<BhbillMaster> BhbillMasters { get; set; }

    public virtual DbSet<BhcalculationUnit> BhcalculationUnits { get; set; }

    public virtual DbSet<BhcategoryProduction> BhcategoryProductions { get; set; }

    public virtual DbSet<BhcompanyContact> BhcompanyContacts { get; set; }

    public virtual DbSet<BhcostumerInfo> BhcostumerInfos { get; set; }

    public virtual DbSet<Bhlog> Bhlogs { get; set; }

    public virtual DbSet<BhlostMoneyEmloyee> BhlostMoneyEmloyees { get; set; }

    public virtual DbSet<BhmoneyBonu> BhmoneyBonus { get; set; }

    public virtual DbSet<Bhpermision> Bhpermisions { get; set; }

    public virtual DbSet<BhproductDetail> BhproductDetails { get; set; }

    public virtual DbSet<BhproductMaster> BhproductMasters { get; set; }

    public virtual DbSet<Bhrank> Bhranks { get; set; }

    public virtual DbSet<BhsalaryEmloyee> BhsalaryEmloyees { get; set; }

    public virtual DbSet<BhserviceInvoiceReceiptDetail> BhserviceInvoiceReceiptDetails { get; set; }

    public virtual DbSet<BhserviceInvoiceReceiptMaster> BhserviceInvoiceReceiptMasters { get; set; }

    public virtual DbSet<Bhstatistic> Bhstatistics { get; set; }

    public virtual DbSet<Bhstatus> Bhstatuses { get; set; }

    public virtual DbSet<BhuserInfo> BhuserInfos { get; set; }

    public virtual DbSet<SysMenuRole> SysMenuRoles { get; set; }

    public virtual DbSet<SysRoleRigh> SysRoleRighs { get; set; }

    public virtual DbSet<SysRawTable> SysRawTables { get; set; }

    public virtual DbSet<Bhreceipts> BhReceives { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=KHANHNGUYENLAPT;Initial Catalog=QLyBanHang;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bhaccount>(entity =>
        {
            entity.HasKey(e => e.Username);

            entity.ToTable("BHAccount");

            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("username");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Email)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Enter)
                .HasColumnType("datetime")
                .HasColumnName("enter");
            entity.Property(e => e.Ma_Ch)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("ma_CH");
            entity.Property(e => e.Password)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Permision)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("('EMPLOYEE')")
                .HasColumnName("permision");
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("status");
        });

        modelBuilder.Entity<BhbillDetail>(entity =>
        {
            entity.ToTable("BHBill_Detail");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.IdBill)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_bill");
            entity.Property(e => e.IdProduct)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_product");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price");
            entity.Property(e => e.PricePersent)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price_persent");
            entity.Property(e => e.TotalNumber)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total_number");
            entity.Property(e => e.TotalPrice)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total_price");
        });

        modelBuilder.Entity<BhbillMaster>(entity =>
        {
            entity.ToTable("BHBill_Master");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.C_User)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("c_user");
            entity.Property(e => e.IdCustomer)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_customer");
            entity.Property(e => e.IdProduct)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_product");
            entity.Property(e => e.Note).HasColumnName("note");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price");
            entity.Property(e => e.PricePersent)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price_persent");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.TotalPrice)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total_price");
        });

        modelBuilder.Entity<BhcalculationUnit>(entity =>
        {
            entity.ToTable("BHCalculationUnit");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(254)
                .HasColumnName("name");
            entity.Property(e => e.ShortKey)
                .HasMaxLength(50)
                .HasColumnName("short_key");
        });

        modelBuilder.Entity<BhcategoryProduction>(entity =>
        {
            entity.ToTable("BHCategoryProduction");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Name)
                .HasMaxLength(254)
                .HasColumnName("name");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        modelBuilder.Entity<BhcompanyContact>(entity =>
        {
            entity.ToTable("BHCompanyContact");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(2000)
                .HasColumnName("address");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.CUsername)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("c_username");
            entity.Property(e => e.EndDate)
                .HasColumnType("datetime")
                .HasColumnName("end_date");
            entity.Property(e => e.MaCh)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ma_CH");
            entity.Property(e => e.Name)
                .HasMaxLength(254)
                .HasColumnName("name");
            entity.Property(e => e.Notes)
                .HasMaxLength(1000)
                .HasColumnName("notes");
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price");
            entity.Property(e => e.StartDate)
                .HasColumnType("datetime")
                .HasColumnName("start_date");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("status");
            entity.Property(e => e.TypeStore)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("type_store");
            entity.Property(e => e.Usename)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("usename");
        });

        modelBuilder.Entity<BhcostumerInfo>(entity =>
        {
            entity.ToTable("BHCostumerInfo");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Birthday)
                .HasColumnType("datetime")
                .HasColumnName("birthday");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Email)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Fullname)
                .HasMaxLength(254)
                .HasColumnName("fullname");
            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("gender");
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("phone");
            entity.Property(e => e.Rank)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rank");
            entity.Property(e => e.TotalPayment)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total_payment");
        });

        modelBuilder.Entity<Bhlog>(entity =>
        {
            entity.ToTable("BHLog");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.CUser)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("c_user");
            entity.Property(e => e.DoWork).HasColumnName("do_work");
            entity.Property(e => e.Note)
                .HasMaxLength(254)
                .HasColumnName("note");
        });

        modelBuilder.Entity<BhlostMoneyEmloyee>(entity =>
        {
            entity.ToTable("BHLostMoneyEmloyee");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.IdEmloyee)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_emloyee");
            entity.Property(e => e.Important)
                .HasMaxLength(254)
                .HasColumnName("important");
            entity.Property(e => e.LostMoney)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("lost_money");
            entity.Property(e => e.Why)
                .HasMaxLength(500)
                .HasColumnName("why");
        });

        modelBuilder.Entity<BhmoneyBonu>(entity =>
        {
            entity.ToTable("BHMoneyBonus");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Money)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("money");
            entity.Property(e => e.Title)
                .HasMaxLength(254)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Bhpermision>(entity =>
        {
            entity.ToTable("BHPermision");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Name)
                .HasMaxLength(254)
                .HasColumnName("name");
            entity.Property(e => e.UserCreate)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("user_create");
        });

        modelBuilder.Entity<BhproductDetail>(entity =>
        {
            entity.ToTable("BHProduct_Detail");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.IdProduct)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_product");
            entity.Property(e => e.About).HasColumnName("about");
            entity.Property(e => e.Images).HasColumnName("images");
            entity.Property(e => e.Name)
                .HasMaxLength(500)
                .HasColumnName("name");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price");
            entity.Property(e => e.PricePersent)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price_persent");
            entity.Property(e => e.Review).HasColumnName("review");
            entity.Property(e => e.Total).HasColumnName("total");
            entity.Property(e => e.C_Date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.C_User)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("c_user");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Show).HasColumnName("show");
            entity.Property(e => e.E_Date)
                .HasColumnType("datetime")
                .HasColumnName("e_date");
            entity.Property(e => e.ma_ch)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ma_ch");
        });

        modelBuilder.Entity<BhproductMaster>(entity =>
        {
            entity.ToTable("BHProduct_Master");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.CUser)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("c_user");
            entity.Property(e => e.EDate)
                .HasColumnType("datetime")
                .HasColumnName("e_date");
            entity.Property(e => e.Status).HasColumnName("status");
        });

        modelBuilder.Entity<Bhrank>(entity =>
        {
            entity.ToTable("BHRank");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.PricePersion)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price_persion");
            entity.Property(e => e.ShortKey)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("short_key");
        });

        modelBuilder.Entity<BhsalaryEmloyee>(entity =>
        {
            entity.ToTable("BHSalaryEmloyee");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Cusername)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("cusername");
            entity.Property(e => e.DayOffTotal).HasColumnName("day_off_total");
            entity.Property(e => e.IdBonus)
                .HasMaxLength(5000)
                .IsUnicode(false)
                .HasColumnName("id_bonus");
            entity.Property(e => e.LostMoney)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("lost_money");
            entity.Property(e => e.MaxDayOff).HasColumnName("max_day_off");
            entity.Property(e => e.SalaryHour)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("salary_hour");
            entity.Property(e => e.SalaryTotal)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("salary_total");
            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("username");
            entity.Property(e => e.WorkTime)
                .HasColumnType("datetime")
                .HasColumnName("work_time");
        });

        modelBuilder.Entity<BhserviceInvoiceReceiptDetail>(entity =>
        {
            entity.ToTable("BHServiceInvoiceReceipt_Detail");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.IdCalculationUnit)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_calculation_unit");
            entity.Property(e => e.IdServiceInvoiceReceipt)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_service_invoice_receipt");
            entity.Property(e => e.Note).HasColumnName("note");
            entity.Property(e => e.Price)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("price");
            entity.Property(e => e.Title)
                .HasMaxLength(1000)
                .HasColumnName("title");
            entity.Property(e => e.TotalNumber)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total_number");
            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        modelBuilder.Entity<BhserviceInvoiceReceiptMaster>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_BHServiceInvoiceReceipt");

            entity.ToTable("BHServiceInvoiceReceipt_Master");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Note)
                .HasMaxLength(2000)
                .HasColumnName("note");
            entity.Property(e => e.Total)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total");
            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Bhstatistic>(entity =>
        {
            entity.ToTable("BHStatistic");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.About).HasColumnName("about");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Favorite)
                .HasColumnType("datetime")
                .HasColumnName("favorite");
            entity.Property(e => e.Incoming)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("incoming");
            entity.Property(e => e.IsRead).HasColumnName("is_read");
            entity.Property(e => e.Month).HasColumnName("month");
            entity.Property(e => e.Name)
                .HasMaxLength(500)
                .HasColumnName("name");
            entity.Property(e => e.Spending)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("spending");
            entity.Property(e => e.Total)
                .HasColumnType("decimal(18, 0)")
                .HasColumnName("total");
            entity.Property(e => e.Year).HasColumnName("year");
        });

        modelBuilder.Entity<Bhstatus>(entity =>
        {
            entity.ToTable("BHStatus");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.ForTable)
                .HasMaxLength(50)
                .HasColumnName("for_table");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.ShortKey)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("short_key");
        });

        modelBuilder.Entity<BhuserInfo>(entity =>
        {
            entity.ToTable("BHUserInfo");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(254)
                .HasColumnName("address");
            entity.Property(e => e.Birthday)
                .HasColumnType("datetime")
                .HasColumnName("birthday");
            entity.Property(e => e.Cccd)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("cccd");
            entity.Property(e => e.Fullname)
                .HasMaxLength(254)
                .HasColumnName("fullname");
            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .HasColumnName("gender");
            entity.Property(e => e.IdBike)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_bike");
            entity.Property(e => e.Image)
                .IsUnicode(false)
                .HasColumnName("image");
            entity.Property(e => e.Note).HasColumnName("note");
            entity.Property(e => e.Username)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        modelBuilder.Entity<SysMenuRole>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_SysMenu");

            entity.ToTable("SysMenuRole");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.c_date)
                .HasColumnType("datetime")
                .HasColumnName("c_date");
            entity.Property(e => e.Link).HasColumnName("link");
            entity.Property(e => e.MaCh)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ma_CH");
            entity.Property(e => e.Menuid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("menuid");
            entity.Property(e => e.Name)
                .HasMaxLength(500)
                .HasColumnName("name");
            entity.Property(e => e.NumberOrder)
                .HasDefaultValueSql("((0))")
                .HasColumnName("number_order");
            entity.Property(e => e.PermisionCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("permision_code");
            entity.Property(e => e.Show)
                .HasDefaultValueSql("((1))")
                .HasColumnName("show");
            entity.Property(e => e.Component)
                .HasMaxLength(254)
                .HasColumnName("component");
            entity.Property(e => e.Icon)
                .HasMaxLength(50)
                .HasColumnName("icon");
        });

        modelBuilder.Entity<SysRoleRigh>(entity =>
        {
            entity.ToTable("SysRoleRigh");

            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.Class)
                .HasMaxLength(50)
                .HasColumnName("class");
            entity.Property(e => e.Enable).HasColumnName("enable");
            entity.Property(e => e.Icon)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("icon");
            entity.Property(e => e.MenuStt)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("menu_stt");
            entity.Property(e => e.Menuid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("menuid");
            entity.Property(e => e.NameEn)
                .HasMaxLength(254)
                .HasColumnName("name_en");
            entity.Property(e => e.NameVn)
                .HasMaxLength(254)
                .HasColumnName("name_vn");
            entity.Property(e => e.Show)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("show");
            entity.Property(e => e.Color)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("color");
        });


        modelBuilder.Entity<SysRawTable>(entity =>
        {
            entity.ToTable("SysRawTable");
            
            entity.Property(e => e.Id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.MenuId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("menuid");
            entity.Property(e => e.TableColumn)
                .HasMaxLength(50)
                .HasColumnName("table_column");
            entity.Property(e => e.Name)
                .HasMaxLength(254)
                .HasColumnName("name");
            entity.Property(e => e.NameEn)
                .HasMaxLength(254)
                .HasColumnName("name_en");
            entity.Property(e => e.DataType)
                .HasMaxLength(50)
                .HasColumnName("data_type");
            entity.Property(e => e.Align)
                .HasMaxLength(50)
                .HasDefaultValueSql("left")
                .HasColumnName("align");
            entity.Property(e => e.Show)
                .HasColumnName ("show");
            entity.Property(e => e.Show)
                .HasColumnName("show");
            entity.Property(e => e.NumberOrder)
                .HasConversion<Int32>()
                .HasColumnName("number_order");
            entity.Property(e => e.CDate)
                .HasDefaultValueSql(DateTime.UtcNow.AddHours(7).ToString())
                .HasColumnName("c_date");
            entity.Property(e => e.CUser)
                .HasMaxLength(254)
                .HasColumnName("c_user");
        });

        modelBuilder.Entity<Bhreceipts>(entity =>
        {
            entity.ToTable("BHReceipt");

            entity.Property(e => e.id)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id");
            entity.Property(e => e.number)
                .HasMaxLength(50)
                .HasColumnName("number");
            entity.Property(e => e.idBillMaster)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("id_billM");
            entity.Property(e => e.receiveMoney).HasColumnName("recevice_money");
            entity.Property(e => e.change).HasColumnName("change");
            entity.Property(e => e.totalMoney).HasColumnName("total_money");
            entity.Property(e => e.status).HasColumnName("status");
            entity.Property(e => e.cDate)
                .HasDefaultValueSql(DateTime.UtcNow.AddHours(7).ToString())
                .HasColumnName("c_date");
            entity.Property(e => e.cUser)
                .HasMaxLength(254)
                .HasColumnName("c_user");
            entity.Property(e => e.maCH)
                .HasMaxLength(254)
                .IsUnicode(false)
                .HasColumnName("ma_CH");

        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
