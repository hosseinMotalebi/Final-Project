import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { adminLogout, getAdminSession, getUsers } from "./adminAuth";

export default function AdminPanel() {
  const navigate = useNavigate();
  const session = getAdminSession();
  const [allUsers, setAllUsers] = useState(() => getUsers());

  if (!session) return <Navigate to="/Login" replace />;

  const loadAllUsers = () => setAllUsers(getUsers());

  const handleLogout = () => {
    adminLogout();
    navigate("/");
  };

  const loginDate = new Date(session.loginAt).toLocaleDateString("fa-IR");

  return (
    <div
      className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-300 flex items-center justify-center p-6 pt-28 font-sans text-base-content"
      dir="rtl"
    >
      <div className="w-full max-w-4xl bg-base-100/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-base-200/50 overflow-hidden transition-all duration-500">
        <div className="bg-primary text-primary-content p-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold drop-shadow-md">
              سلام، ادمین عزیز!
            </h2>
            <p className="opacity-90 mt-2 text-sm">
              به پنل مدیریت خوش آمدید.
            </p>
          </div>
          <div className="avatar placeholder drop-shadow-xl">
            <div className="bg-base-100 text-primary rounded-full w-16 h-16 text-2xl font-bold shadow-inner flex items-center justify-center">
              <span>A</span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="stat bg-base-200/50 rounded-2xl border border-base-300">
              <div className="stat-title text-base-content/70">نقش</div>
              <div className="stat-value text-xl text-primary mt-1 font-roboto">
                Admin
              </div>
            </div>
            <div className="stat bg-base-200/50 rounded-2xl border border-base-300">
              <div className="stat-title text-base-content/70">ایمیل ادمین</div>
              <div className="stat-value text-lg mt-1 truncate">
                {session.email}
              </div>
            </div>
            <div className="stat bg-base-200/50 rounded-2xl border border-base-300">
              <div className="stat-title text-base-content/70">تاریخ ورود</div>
              <div className="stat-value text-lg mt-1">{loginDate}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-base-300 pt-6">
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline hover:text-white! rounded-xl px-8 transition-transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
              خروج از حساب
            </button>

            <button
              onClick={loadAllUsers}
              className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              به‌روزرسانی لیست کاربران
            </button>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full inline-block"></span>
              لیست کل کاربران سیستم ({allUsers.length})
            </h3>

            {allUsers.length === 0 ? (
              <p
                className="text-center text-base-content/60 py-10 border border-dashed border-base-300 rounded-2xl"
                data-testid="no-users"
              >
                هنوز هیچ کاربری ثبت‌نام نکرده است.
              </p>
            ) : (
              <div className="overflow-x-auto border border-base-300 rounded-2xl shadow-sm bg-base-100">
                <table className="table table-zebra w-full text-center">
                  <thead className="bg-base-200/60 text-base-content text-sm">
                    <tr>
                      <th className="py-4 rounded-tr-2xl">آیدی</th>
                      <th>نام کاربر</th>
                      <th>ایمیل</th>
                      <th>رمز عبور (مدیریت)</th>
                      <th className="rounded-tl-2xl">تاریخ ثبت‌نام</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-base-200/40">
                        <td className="font-mono text-primary/80">
                          #{user.id}
                        </td>
                        <td className="font-medium">{user.fullName}</td>
                        <td className="text-left font-sans" dir="ltr">
                          {user.email}
                        </td>
                        <td
                          className="text-left font-mono text-error/80"
                          dir="ltr"
                        >
                          {user.password}
                        </td>
                        <td className="text-sm">{user.joinDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
