
"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import TaskFormComponent from "../components/TaskForm";
import TaskListComponent from "../components/TaskList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Description from "@/components/Description";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Description />
            <main className="flex-grow container mx-auto p-4">
              {/* <TaskFormComponent {...pageProps} /> */}
              <TaskListComponent {...pageProps} />
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}

export default MyApp;
