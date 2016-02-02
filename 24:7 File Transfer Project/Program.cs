using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileTransfer
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("File Transfer In Progress...\n");

            string homePath = "C:\\Users\\Student\\Desktop\\HomeFolder\\";
            string destPath = "C:\\Users\\Student\\Desktop\\DestinationFolder\\";
            string fileType = "*.txt";

            Console.WriteLine("From: {0}", homePath);
            Console.WriteLine("To: {0}\n", destPath);

            string[] txtFilesArray = Directory.GetFiles(homePath, fileType);

            foreach (string file in txtFilesArray)
            {
                if (FileCheck(file))
                {
                    string fileTitle = Path.GetFileName(file);

                    Console.WriteLine("Copying the files... {0}", fileTitle);

                    File.Copy(file, destPath + fileTitle, true);
                }
            }

            Console.WriteLine("\nFile Transfer is Done...");
            Console.ReadLine();
        }

        public static bool FileCheck(string FileName)
        {
            FileInfo fileTitleInfo = new FileInfo(FileName);

            if (fileTitleInfo.LastWriteTime.AddDays(1) >= DateTime.Now)
                return true;
            else
                return false;
        }
    }
}