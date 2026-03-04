// ============================================
// COMPLETE QUESTIONS DATABASE - ALL 12 CHAPTERS
// ============================================

const questionsData = {
    // ===== CHAPTER 1: COMPUTER NETWORK (100 Questions) =====
    computerNetwork: {
        chapterName: "Computer Network",
        questions: [
            // Page 1-2: ARPANET & Basics
            {
                id: "net1",
                question: "What is ARPANET?",
                answer: "Advanced Research Projects Agency Network, the world's first operational computer network."
            },
            {
                id: "net2",
                question: "Which agency funded the creation of ARPANET?",
                answer: "The United States Department of Defense."
            },
            {
                id: "net3",
                question: "What does NSFNET stand for?",
                answer: "National Science Foundation Network."
            },
            {
                id: "net4",
                question: "What was the main purpose of NSFNET?",
                answer: "To connect universities and promote academic and engineering research."
            },
            {
                id: "net5",
                question: "How was the Internet born?",
                answer: "By connecting ARPANET, NSFNET, and various private networks together."
            },
            {
                id: "net6",
                question: "What is the Internet?",
                answer: "A massive global system of interconnected computer networks."
            },
            {
                id: "net7",
                question: "What protocol made the modern Internet possible?",
                answer: "TCP/IP (Transmission Control Protocol/Internet Protocol)."
            },
            {
                id: "net8",
                question: "Who are widely known as the 'Fathers of the Internet'?",
                answer: "Vint Cerf and Bob Kahn."
            },
            
            // Data Communication Terminologies
            {
                id: "net9",
                question: "What is Data Communication?",
                answer: "The process of exchanging digital data between two or more devices."
            },
            {
                id: "net10",
                question: "What are the 5 main components of data communication?",
                answer: "Sender, Receiver, Message, Communication Medium, and Protocol."
            },
            {
                id: "net11",
                question: "What is a 'Sender' in a network?",
                answer: "The computer or device that originates and sends the data."
            },
            {
                id: "net12",
                question: "What is a 'Receiver'?",
                answer: "The destination device that receives the data."
            },
            {
                id: "net13",
                question: "What is a 'Message'?",
                answer: "The actual information (text, audio, video) being transmitted."
            },
            {
                id: "net14",
                question: "What is a 'Protocol'?",
                answer: "A strict set of rules governing how data is sent, received, and understood over a network."
            },
            {
                id: "net15",
                question: "What is 'Bandwidth'?",
                answer: "The maximum capacity or amount of data that a communication channel can carry in a given time."
            },
            {
                id: "net16",
                question: "How is data transfer rate usually measured?",
                answer: "In bits per second (bps), Kbps, Mbps, or Gbps."
            },
            {
                id: "net17",
                question: "What is an IP address?",
                answer: "A unique numerical label assigned to every device connected to a computer network."
            },
            {
                id: "net18",
                question: "What is the difference between IPv4 and IPv6?",
                answer: "IPv4 uses 32-bit addresses, while the newer IPv6 uses 128-bit addresses to support more devices."
            },
            {
                id: "net19",
                question: "What is 'Switching' in networking?",
                answer: "The technique of deciding the best path to transmit data from source to destination."
            },
            {
                id: "net20",
                question: "What is Circuit Switching?",
                answer: "A dedicated, physical path is locked in between sender and receiver before any data is sent (like old landline phones)."
            },
            {
                id: "net21",
                question: "What is Packet Switching?",
                answer: "Data is broken into small chunks called 'packets' that independently find their fastest route to the destination."
            },
            {
                id: "net22",
                question: "Which switching technique does the Internet use?",
                answer: "Packet Switching, because it uses bandwidth much more efficiently."
            },
            
            // Transmission Media (Page 2-3)
            {
                id: "net23",
                question: "What is Guided Media?",
                answer: "Wired communication media where data travels through physical cables."
            },
            {
                id: "net24",
                question: "What is Unguided Media?",
                answer: "Wireless communication media where data travels through the air."
            },
            {
                id: "net25",
                question: "What is Twisted Pair Cable?",
                answer: "Two insulated copper wires twisted around each other to reduce electrical interference (e.g., LAN cables)."
            },
            {
                id: "net26",
                question: "What is Co-axial Cable?",
                answer: "A copper cable with a thick central core and a braided metal shield, commonly used for Cable TV."
            },
            {
                id: "net27",
                question: "What is Fiber-optic Cable?",
                answer: "A cable made of glass or plastic that transmits data at very high speeds using pulses of light."
            },
            {
                id: "net28",
                question: "Which wired medium is the fastest and most secure?",
                answer: "Fiber-optic cable, as it uses light and is immune to electrical interference."
            },
            {
                id: "net29",
                question: "What are Radio Waves?",
                answer: "Wireless signals that can penetrate solid walls and travel long distances in all directions (used in Wi-Fi & AM/FM)."
            },
            {
                id: "net30",
                question: "What are Microwaves?",
                answer: "High-speed wireless signals that travel in a straight line and require a direct line-of-sight between antennas."
            },
            {
                id: "net31",
                question: "Can microwaves pass through buildings?",
                answer: "No, they cannot easily penetrate solid obstacles."
            },
            {
                id: "net32",
                question: "What are Infrared waves?",
                answer: "Short-range wireless signals that cannot pass through walls or obstacles."
            },
            {
                id: "net33",
                question: "Give an example of where Infrared waves are used.",
                answer: "Television remote controls and wireless mice."
            },
            {
                id: "net34",
                question: "Why is Infrared communication considered highly secure?",
                answer: "Because the signal cannot travel through walls to be intercepted from another room."
            },
            {
                id: "net35",
                question: "What causes data loss in copper cables over long distances?",
                answer: "Attenuation (the weakening of the signal)."
            },
            {
                id: "net36",
                question: "Which medium is generally the cheapest for setting up a local network?",
                answer: "Twisted Pair Cable."
            },
            
            // Network Devices (Page 3)
            {
                id: "net37",
                question: "What does a Modem do?",
                answer: "It Modulates (digital to analog) and Demodulates (analog to digital) signals for transmission over phone lines."
            },
            {
                id: "net38",
                question: "What is an Ethernet Card (NIC)?",
                answer: "A Network Interface Card placed inside a computer so it can physically connect to a network."
            },
            {
                id: "net39",
                question: "What is an RJ45?",
                answer: "An 8-pin plastic connector attached to the ends of Ethernet cables to plug into network devices."
            },
            {
                id: "net40",
                question: "What is a Repeater?",
                answer: "A device that boosts or amplifies a weak signal so it can travel longer distances without losing data."
            },
            {
                id: "net41",
                question: "What is a Hub?",
                answer: "A simple central device that receives data and blindly broadcasts it to all connected computers."
            },
            {
                id: "net42",
                question: "What is a Switch?",
                answer: "An intelligent central device that receives data and sends it only to the specific intended computer."
            },
            {
                id: "net43",
                question: "Why is a Switch preferred over a Hub?",
                answer: "Because a Switch reduces network traffic and increases security by not broadcasting to everyone."
            },
            {
                id: "net44",
                question: "What is a Router?",
                answer: "A device that connects two or more different networks (like connecting your home network to the Internet)."
            },
            {
                id: "net45",
                question: "How does a router find the best path for data?",
                answer: "It uses IP addresses and a routing table to forward packets."
            },
            {
                id: "net46",
                question: "What is a Gateway?",
                answer: "A device that connects two completely dissimilar networks that use different protocols/rules."
            },
            {
                id: "net47",
                question: "Router vs. Gateway: What is the main difference?",
                answer: "A router connects similar networks; a gateway acts as a translator for differing networks."
            },
            {
                id: "net48",
                question: "What is a Wi-Fi Card?",
                answer: "A wireless network card that allows a computer to connect to a local network using radio waves."
            },
            {
                id: "net49",
                question: "What is a MAC Address?",
                answer: "A permanent, physical address assigned to a network card by the manufacturer."
            },
            {
                id: "net50",
                question: "Can a MAC address be changed?",
                answer: "Usually no, it is permanently burned into the hardware."
            },
            
            // Network Topologies (Page 3-4)
            {
                id: "net51",
                question: "What is a PAN?",
                answer: "Personal Area Network; a very small network connecting a person's devices (like a phone and Bluetooth headphones)."
            },
            {
                id: "net52",
                question: "What is a LAN?",
                answer: "Local Area Network; a network confined to a small area like a single room, school, or office building."
            },
            {
                id: "net53",
                question: "What is a MAN?",
                answer: "Metropolitan Area Network; covers a larger area like a city or a large college campus (e.g., city cable TV network)."
            },
            {
                id: "net54",
                question: "What is a WAN?",
                answer: "Wide Area Network; covers large geographic distances, such as a country or the world (The Internet is a WAN)."
            },
            {
                id: "net55",
                question: "What does 'Topology' mean in networking?",
                answer: "The physical or logical layout of how computers are connected in a network."
            },
            {
                id: "net56",
                question: "What is a Bus Topology?",
                answer: "All devices share and are connected to a single central main cable called the 'backbone'."
            },
            {
                id: "net57",
                question: "What is the main drawback of Bus Topology?",
                answer: "If the central main cable breaks, the entire network stops working."
            },
            {
                id: "net58",
                question: "What is a Star Topology?",
                answer: "All computers are individually connected to a central device, like a Hub or a Switch."
            },
            {
                id: "net59",
                question: "Why is Star Topology highly reliable?",
                answer: "If one cable fails, only that specific computer is disconnected; the rest of the network runs fine."
            },
            {
                id: "net60",
                question: "What happens if the central switch fails in a Star Topology?",
                answer: "The entire network goes down."
            },
            {
                id: "net61",
                question: "What is a Tree Topology?",
                answer: "A hierarchical layout that combines characteristics of both Star and Bus topologies."
            },
            {
                id: "net62",
                question: "Where is Tree Topology mostly used?",
                answer: "In large organizations to connect multiple star-topology networks to a main bus line."
            },
            {
                id: "net63",
                question: "What is a Ring Topology?",
                answer: "Computers are connected in a closed loop, where each node connects to exactly two other nodes."
            },
            {
                id: "net64",
                question: "What is a Mesh Topology?",
                answer: "Every single computer is connected to every other computer on the network."
            },
            {
                id: "net65",
                question: "What is the biggest advantage of a Mesh Topology?",
                answer: "Extremely high fault tolerance; if one path fails, data can take many other routes."
            },
            
            // Network Protocols (Page 4)
            {
                id: "net66",
                question: "What is HTTP?",
                answer: "HyperText Transfer Protocol; rules for transferring web pages and data over the World Wide Web."
            },
            {
                id: "net67",
                question: "What is HTTPS?",
                answer: "HyperText Transfer Protocol Secure; uses encryption to keep data safe while browsing the web."
            },
            {
                id: "net68",
                question: "What is FTP?",
                answer: "File Transfer Protocol; used specifically for uploading and downloading files between computers."
            },
            {
                id: "net69",
                question: "What is PPP?",
                answer: "Point-to-Point Protocol; used to establish a direct connection between two networking nodes."
            },
            {
                id: "net70",
                question: "What is SMTP?",
                answer: "Simple Mail Transfer Protocol; used specifically for sending outgoing emails."
            },
            {
                id: "net71",
                question: "What is POP3?",
                answer: "Post Office Protocol version 3; used for receiving and downloading emails from a server to a local device."
            },
            {
                id: "net72",
                question: "What is the main difference between SMTP and POP3?",
                answer: "SMTP pushes (sends) mail; POP3 pulls (receives) mail."
            },
            {
                id: "net73",
                question: "What is TCP?",
                answer: "Transmission Control Protocol; breaks data into packets and ensures they are reassembled correctly."
            },
            {
                id: "net74",
                question: "What is IP?",
                answer: "Internet Protocol; handles the addressing (IP addresses) and routing of packets to the correct destination."
            },
            {
                id: "net75",
                question: "What is TELNET?",
                answer: "An older protocol used to remotely log into another computer via a text-based interface."
            },
            {
                id: "net76",
                question: "What is VoIP?",
                answer: "Voice over Internet Protocol; allows you to make voice calls over the Internet (e.g., WhatsApp calls, Skype)."
            },
            {
                id: "net77",
                question: "What is GSM?",
                answer: "Global System for Mobile communications; the global standard protocol for 2G digital cellular networks."
            },
            {
                id: "net78",
                question: "What is GPRS?",
                answer: "General Packet Radio Service; a packet-based mobile data service for 2G and 3G networks."
            },
            {
                id: "net79",
                question: "What is WLL?",
                answer: "Wireless in Local Loop; connecting a subscriber to a local telephone station wirelessly instead of using copper cables."
            },
            
            // Web Services (Page 4-5)
            {
                id: "net80",
                question: "What is the WWW?",
                answer: "World Wide Web; a massive collection of interlinked digital documents accessed via the Internet."
            },
            {
                id: "net81",
                question: "Is the WWW the same thing as the Internet?",
                answer: "No. The Internet is the physical network of cables/devices; the WWW is a service running on it."
            },
            {
                id: "net82",
                question: "What is HTML?",
                answer: "HyperText Markup Language; the standard coding language used to build and design the structure of webpages."
            },
            {
                id: "net83",
                question: "What is XML?",
                answer: "Extensible Markup Language; used to store and transport data logically, focusing on what data is rather than how it looks."
            },
            {
                id: "net84",
                question: "How do HTML and XML differ?",
                answer: "HTML is for displaying data visually; XML is for carrying and structuring data behind the scenes."
            },
            {
                id: "net85",
                question: "What is a Domain Name?",
                answer: "A readable, easy-to-remember name (like google.com) that points to a website's IP address."
            },
            {
                id: "net86",
                question: "What is a URL?",
                answer: "Uniform Resource Locator; the complete, specific web address used to find a web page (e.g., http://www.site.com/page1)."
            },
            {
                id: "net87",
                question: "What does DNS stand for?",
                answer: "Domain Name System; it acts like a phonebook, translating readable domain names into numerical IP addresses."
            },
            {
                id: "net88",
                question: "What is a Website?",
                answer: "A collection of related web pages hosted together under a single domain name."
            },
            {
                id: "net89",
                question: "What is a Web Browser?",
                answer: "Software (like Chrome, Firefox, Safari) used to access, retrieve, and view websites."
            },
            {
                id: "net90",
                question: "What is a Web Server?",
                answer: "A powerful, always-on computer that stores website files and 'serves' them to users who request them."
            },
            {
                id: "net91",
                question: "What is Web Hosting?",
                answer: "A service provided by companies that rent out space on their Web Servers for people to store their website files."
            },
            {
                id: "net92",
                question: "What is a hyperlink?",
                answer: "A clickable text or image that connects one webpage to another."
            },
            {
                id: "net93",
                question: "What does 'downloading' mean?",
                answer: "Receiving data or files from a remote web server to your local computer."
            },
            {
                id: "net94",
                question: "What does 'uploading' mean?",
                answer: "Sending data or files from your local computer up to a remote web server."
            },
            {
                id: "net95",
                question: "What is a Client in web services?",
                answer: "Your computer or web browser that requests information from a server."
            },
            {
                id: "net96",
                question: "What is a Server in web services?",
                answer: "The machine that fulfills the client's request and sends the data back."
            },
            {
                id: "net97",
                question: "What does the 's' in HTTPS stand for?",
                answer: "Secure (indicating the data transferred is encrypted)."
            },
            {
                id: "net98",
                question: "Who invented the World Wide Web?",
                answer: "Tim Berners-Lee in 1989."
            },
            {
                id: "net99",
                question: "What are tags in HTML?",
                answer: "Keywords surrounded by angle brackets (like <b>) used to format content on a webpage."
            },
            {
                id: "net100",
                question: "Why is a web browser necessary?",
                answer: "Because it translates raw HTML and web code into the visual webpage humans can read and interact with."
            }
        ]
    },

    // ===== CHAPTER 2: PANDAS & MATPLOTLIB (50 Questions) =====
    pandasMatplotlib: {
        chapterName: "Pandas & Matplotlib",
        questions: [
            // Page 7 - Pandas Basics
            {
                id: "pandas1",
                question: "What is the Pandas library used for?",
                answer: "Pandas is a Python library used for data analysis, data manipulation, and cleaning tabular data."
            },
            {
                id: "pandas2",
                question: "Which Python library is primarily used for 2D data visualization?",
                answer: "matplotlib.pyplot is the standard library used to create 2D graphs and charts."
            },
            {
                id: "pandas3",
                question: "Name the two main data structures provided by Pandas.",
                answer: "The two main data structures are Series (1-Dimensional) and DataFrame (2-Dimensional)."
            },
            {
                id: "pandas4",
                question: "How do you import Pandas and Matplotlib in a Python script?",
                answer: "By using the statements: import pandas as pd and import matplotlib.pyplot as plt."
            },
            {
                id: "pandas5",
                question: "What is the fundamental difference between a Series and a DataFrame?",
                answer: "A Series is a 1D array (like a single column), whereas a DataFrame is a 2D table with rows and columns."
            },
            
            // Pandas Series
            {
                id: "pandas6",
                question: "What is a Pandas Series?",
                answer: "It is a 1-dimensional array capable of holding any data type (integers, strings, floats) with labeled indices."
            },
            {
                id: "pandas7",
                question: "How do you create a Series from a dictionary?",
                answer: "Use pd.Series(dictionary_name). The dictionary keys automatically become the index of the Series."
            },
            {
                id: "pandas8",
                question: "How do you create a Series from a scalar (single) value?",
                answer: "You provide the value and specify the index list: pd.Series(5, index=['a', 'b', 'c'])."
            },
            {
                id: "pandas9",
                question: "What happens if you add two Series with different indices?",
                answer: "Pandas matches the indices. For non-matching indices, it fills the result with NaN (Not a Number)."
            },
            {
                id: "pandas10",
                question: "What does the head() function do in a Series?",
                answer: "Series.head() returns the first 5 elements of the Series by default. You can also specify a number, like head(3)."
            },
            {
                id: "pandas11",
                question: "How do you view the last 4 elements of a Series named S?",
                answer: "You use the tail function: S.tail(4)."
            },
            {
                id: "pandas12",
                question: "What is the difference between positional indexing and label indexing in a Series?",
                answer: "Positional uses default integers starting from 0 (e.g., S[0]), while label uses the user-defined index names (e.g., S['Maths'])."
            },
            {
                id: "pandas13",
                question: "How do you slice a Series S to get elements from index position 2 to 4?",
                answer: "Using slicing syntax: S[2:5]. (Note: The end index 5 is excluded)."
            },
            {
                id: "pandas14",
                question: "What is vector operation in a Series?",
                answer: "It means applying a mathematical operation directly to the whole Series, e.g., S * 2 multiplies all elements by 2."
            },
            {
                id: "pandas15",
                question: "How do you filter elements in a Series S that are greater than 50?",
                answer: "Using Boolean Indexing: S[S > 50]."
            },
            
            // Pandas DataFrame (Page 7-8)
            {
                id: "pandas16",
                question: "What is a DataFrame?",
                answer: "A DataFrame is a 2-dimensional, size-mutable tabular data structure with labeled axes (rows and columns)."
            },
            {
                id: "pandas17",
                question: "How do you create a DataFrame from a list of dictionaries?",
                answer: "pd.DataFrame([{'a': 1}, {'b': 2}]). Each dictionary represents a single row in the DataFrame."
            },
            {
                id: "pandas18",
                question: "How do you extract the first 3 rows of a DataFrame df?",
                answer: "Use the head function: df.head(3)."
            },
            {
                id: "pandas19",
                question: "How do you view the last 2 rows of a DataFrame df?",
                answer: "Use the tail function: df.tail(2)."
            },
            {
                id: "pandas20",
                question: "Write the code to add a new column 'Age' to an existing DataFrame df.",
                answer: "df['Age'] = [15, 16, 17] (Assuming the DataFrame has 3 rows)."
            },
            {
                id: "pandas21",
                question: "How do you delete a column named 'City' from a DataFrame?",
                answer: "You can use the drop function: df = df.drop('City', axis=1) or simply del df['City']."
            },
            {
                id: "pandas22",
                question: "How do you rename a column 'Marks' to 'Score' in df?",
                answer: "Use the rename function: df.rename(columns={'Marks': 'Score'})."
            },
            {
                id: "pandas23",
                question: "What is the difference between loc and iloc?",
                answer: "loc is used for Label-based indexing (using names), while iloc is used for Integer-based (positional) indexing."
            },
            {
                id: "pandas24",
                question: "How do you select rows where 'Marks' are greater than 90? (Boolean Indexing)",
                answer: "df[df['Marks'] > 90]."
            },
            {
                id: "pandas25",
                question: "How do you display only the 'Name' column from a DataFrame?",
                answer: "You can use df['Name'] or df.Name."
            },
            {
                id: "pandas26",
                question: "Write the syntax to iterate over the rows of a DataFrame.",
                answer: "Use the iterrows() function: for index, row in df.iterrows():"
            },
            {
                id: "pandas27",
                question: "What does axis=0 and axis=1 represent in a DataFrame?",
                answer: "axis=0 refers to Rows (Index), and axis=1 refers to Columns."
            },
            {
                id: "pandas28",
                question: "How can you display the column headers of a DataFrame?",
                answer: "Use the attribute: df.columns."
            },
            {
                id: "pandas29",
                question: "How do you select a specific row labeled 'Student1' using loc?",
                answer: "df.loc['Student1']."
            },
            {
                id: "pandas30",
                question: "What will df.shape return?",
                answer: "It returns a tuple showing the dimensions of the DataFrame, formatted as (Number of Rows, Number of Columns)."
            },
            
            // CSV Files (Page 8)
            {
                id: "pandas31",
                question: "What does CSV stand for?",
                answer: "CSV stands for Comma Separated Values. It is a plain text format to store tabular data."
            },
            {
                id: "pandas32",
                question: "Which function is used to read a CSV file into a DataFrame?",
                answer: "The read_csv() function. Example: df = pd.read_csv('data.csv')."
            },
            {
                id: "pandas33",
                question: "How do you export a DataFrame df to a CSV file named 'output.csv'?",
                answer: "Use the to_csv() function. Example: df.to_csv('output.csv')."
            },
            {
                id: "pandas34",
                question: "What does the index=False parameter do when exporting a DataFrame to CSV?",
                answer: "It prevents Pandas from writing the row indices into the CSV file, keeping the output clean."
            },
            {
                id: "pandas35",
                question: "What parameter is used if your CSV file doesn't have a header row?",
                answer: "You use header=None in the read_csv() function."
            },
            
            // Data Visualization (Page 9)
            {
                id: "pandas36",
                question: "What is the main purpose of Data Visualization?",
                answer: "To represent complex data graphically so that trends, patterns, and anomalies can be understood easily."
            },
            {
                id: "pandas37",
                question: "Which function is used to draw a Line Plot?",
                answer: "plt.plot(x, y)"
            },
            {
                id: "pandas38",
                question: "Which function is used to draw a Bar Graph?",
                answer: "plt.bar(x, height)"
            },
            {
                id: "pandas39",
                question: "What is the main difference between a Bar graph and a Histogram?",
                answer: "Bar graphs compare categorical data (like distinct cities), while histograms show the frequency distribution of continuous numerical data (like age ranges)."
            },
            {
                id: "pandas40",
                question: "Which function is used to draw a Histogram?",
                answer: "plt.hist(x)"
            },
            {
                id: "pandas41",
                question: "How do you add a main title to your plot?",
                answer: "Use plt.title('Your Title Here')."
            },
            {
                id: "pandas42",
                question: "How do you label the X-axis and Y-axis in a chart?",
                answer: "Use plt.xlabel('X-axis Name') and plt.ylabel('Y-axis Name')."
            },
            {
                id: "pandas43",
                question: "What is a Legend in a chart?",
                answer: "A legend is an area describing the elements of the graph, helping viewers identify different lines or bars by their colors or markers."
            },
            {
                id: "pandas44",
                question: "How do you display the legend on a plot?",
                answer: "Use the plt.legend() function."
            },
            {
                id: "pandas45",
                question: "How do you change the color of a line plot to red?",
                answer: "By passing the color parameter: plt.plot(x, y, color='red')."
            },
            {
                id: "pandas46",
                question: "How do you save a plotted graph as an image file (e.g., PNG)?",
                answer: "Use the savefig() function: plt.savefig('my_chart.png')."
            },
            {
                id: "pandas47",
                question: "Which Matplotlib command actually displays the plot on the screen?",
                answer: "plt.show()"
            },
            {
                id: "pandas48",
                question: "How do you set the width of the bars in a bar chart?",
                answer: "Use the width parameter: plt.bar(x, y, width=0.5)."
            },
            {
                id: "pandas49",
                question: "How do you pass the number of 'bins' (intervals) to a histogram?",
                answer: "Pass the bins argument: plt.hist(x, bins=10)."
            },
            {
                id: "pandas50",
                question: "What is the default marker style for a line plot if none is specified?",
                answer: "By default, plt.plot() draws a solid continuous line without any distinct point markers unless specified (e.g., marker='o')."
            }
        ]
    },

    // ===== CHAPTER 3: DATABASE QUERY USING SQL (50 Questions) =====
    sqlDatabase: {
        chapterName: "Database Query using SQL",
        questions: [
            // Math Functions (Page 11)
            {
                id: "sql1",
                question: "What does POWER(2, 3) return?",
                answer: "Returns 8. (Calculates 2 raised to the power of 3)."
            },
            {
                id: "sql2",
                question: "What does ROUND(15.75) return?",
                answer: "Returns 16. (Rounds to the nearest whole number)."
            },
            {
                id: "sql3",
                question: "What does ROUND(15.72, 1) return?",
                answer: "Returns 15.7. (Rounds to 1 decimal place)."
            },
            {
                id: "sql4",
                question: "What does MOD(10, 3) return?",
                answer: "Returns 1. (Gives the remainder when 10 is divided by 3)."
            },
            {
                id: "sql5",
                question: "What happens if you use MOD(10, 0)?",
                answer: "Usually returns NULL or an error. (Cannot divide by zero)."
            },
            
            // Text Functions
            {
                id: "sql6",
                question: "What does UCASE('hello') return?",
                answer: "Returns 'HELLO'. (Converts text to uppercase)."
            },
            {
                id: "sql7",
                question: "What is the alternative to UCASE()?",
                answer: "UPPER() does exactly the same thing."
            },
            {
                id: "sql8",
                question: "What does LOWER('SQL') return?",
                answer: "Returns 'sql'. (Converts text to lowercase)."
            },
            {
                id: "sql9",
                question: "What does MID('Computer', 4, 3) return?",
                answer: "Returns 'put'. (Starts at the 4th letter, extracts 3 letters)."
            },
            {
                id: "sql10",
                question: "Are SUBSTRING() and SUBSTR() different from MID()?",
                answer: "No, they work identically in most systems."
            },
            {
                id: "sql11",
                question: "What does LENGTH('Apple') return?",
                answer: "Returns 5. (Counts the number of characters)."
            },
            {
                id: "sql12",
                question: "What does LEFT('Database', 4) return?",
                answer: "Returns 'Data'. (Extracts 4 characters from the beginning)."
            },
            {
                id: "sql13",
                question: "What does RIGHT('Database', 4) return?",
                answer: "Returns 'base'. (Extracts 4 characters from the end)."
            },
            {
                id: "sql14",
                question: "What does INSTR('Database', 'base') return?",
                answer: "Returns 5. (Finds the starting position of the word 'base')."
            },
            {
                id: "sql15",
                question: "What does LTRIM('  Hello') return?",
                answer: "Returns 'Hello'. (Removes spaces from the left side)."
            },
            {
                id: "sql16",
                question: "What does RTRIM('World  ') return?",
                answer: "Returns 'World'. (Removes spaces from the right side)."
            },
            {
                id: "sql17",
                question: "What does TRIM('  Hello  ') return?",
                answer: "Returns 'Hello'. (Removes spaces from both ends)."
            },
            
            // Date Functions
            {
                id: "sql18",
                question: "What does NOW() return?",
                answer: "Returns the current date and time (e.g., '2023-10-27 10:15:30')."
            },
            {
                id: "sql19",
                question: "What does DATE(NOW()) return?",
                answer: "Returns only the date part (e.g., '2023-10-27')."
            },
            {
                id: "sql20",
                question: "What does MONTH('2023-10-27') return?",
                answer: "Returns 10. (Extracts the month number)."
            },
            {
                id: "sql21",
                question: "What does MONTHNAME('2023-10-27') return?",
                answer: "Returns 'October'. (Extracts the month's name)."
            },
            {
                id: "sql22",
                question: "What does YEAR('2023-10-27') return?",
                answer: "Returns 2023. (Extracts the year)."
            },
            {
                id: "sql23",
                question: "What does DAY('2023-10-27') return?",
                answer: "Returns 27. (Extracts the day of the month)."
            },
            {
                id: "sql24",
                question: "What does DAYNAME('2023-10-27') return?",
                answer: "Returns 'Friday'. (Extracts the name of the weekday)."
            },
            
            // Aggregate Functions
            {
                id: "sql25",
                question: "What does MAX(salary) do?",
                answer: "Finds the highest salary in a table."
            },
            {
                id: "sql26",
                question: "What does MIN(age) do?",
                answer: "Finds the lowest age in a table."
            },
            {
                id: "sql27",
                question: "What does AVG(marks) do?",
                answer: "Calculates the average (mean) marks."
            },
            {
                id: "sql28",
                question: "What does SUM(price) do?",
                answer: "Adds up all the prices in a column."
            },
            {
                id: "sql29",
                question: "What does COUNT(employee_id) do?",
                answer: "Counts the number of non-null IDs."
            },
            {
                id: "sql30",
                question: "How is COUNT(*) different from COUNT(column_name)?",
                answer: "COUNT(*) counts all rows, even if some columns have NULL values."
            },
            {
                id: "sql31",
                question: "Do aggregate functions like SUM() ignore NULL values?",
                answer: "Yes, they automatically skip NULLs."
            },
            
            // GROUP BY, HAVING, ORDER BY
            {
                id: "sql32",
                question: "What is GROUP BY used for?",
                answer: "To group rows that have the same values into summary rows (e.g., finding the average salary per department)."
            },
            {
                id: "sql33",
                question: "Can you use GROUP BY without an aggregate function?",
                answer: "Usually, no. It's meant to be used with COUNT, MAX, SUM, etc."
            },
            {
                id: "sql34",
                question: "What does HAVING do?",
                answer: "It filters groups created by GROUP BY."
            },
            {
                id: "sql35",
                question: "How is HAVING different from WHERE?",
                answer: "WHERE filters individual rows before grouping; HAVING filters after grouping."
            },
            {
                id: "sql36",
                question: "Which clause is used to sort data?",
                answer: "ORDER BY."
            },
            {
                id: "sql37",
                question: "How do you sort in descending order?",
                answer: "Add DESC after the column name in ORDER BY."
            },
            {
                id: "sql38",
                question: "How do you sort in ascending order?",
                answer: "Add ASC (or just leave it blank, as ASC is the default)."
            },
            {
                id: "sql39",
                question: "What happens if you order by a text column?",
                answer: "It sorts alphabetically."
            },
            {
                id: "sql40",
                question: "What is the correct execution order: HAVING, WHERE, GROUP BY?",
                answer: "WHERE → GROUP BY → HAVING."
            },
            {
                id: "sql41",
                question: "Can you order by multiple columns?",
                answer: "Yes (e.g., ORDER BY department ASC, salary DESC)."
            },
            {
                id: "sql42",
                question: "If a query has GROUP BY department HAVING AVG(salary) > 50000, what does it return?",
                answer: "Only departments where the average salary is over 50,000."
            },
            {
                id: "sql43",
                question: "Can you use WHERE and HAVING in the same query?",
                answer: "Yes. WHERE filters rows first, then HAVING filters the grouped results."
            },
            {
                id: "sql44",
                question: "If you write ORDER BY age DESC, who appears first?",
                answer: "The oldest person."
            },
            {
                id: "sql45",
                question: "In GROUP BY city, state, how are rows grouped?",
                answer: "By unique combinations of city and state."
            },
            
            // Mixed Scenarios
            {
                id: "sql46",
                question: "Query to show employee names in capitals:",
                answer: "SELECT UPPER(name) FROM employees;"
            },
            {
                id: "sql47",
                question: "Query to find the longest name:",
                answer: "SELECT MAX(LENGTH(name)) FROM employees;"
            },
            {
                id: "sql48",
                question: "Query to get the total number of students in each class:",
                answer: "SELECT class, COUNT(*) FROM students GROUP BY class;"
            },
            {
                id: "sql49",
                question: "Query to show classes with more than 30 students:",
                answer: "SELECT class FROM students GROUP BY class HAVING COUNT(*) > 30;"
            },
            {
                id: "sql50",
                question: "Query to list products from cheapest to most expensive:",
                answer: "SELECT * FROM products ORDER BY price ASC;"
            }
        ]
    },

    // ===== CHAPTER 4: PYTHON FUNCTIONS & FILES (100 Questions) =====
    pythonFunctions: {
        chapterName: "Python Functions & Files",
        questions: [
            // Functions (Page 14-15)
            {
                id: "py1",
                question: "What is a function in Python?",
                answer: "A function is a reusable block of code that performs a specific task. It helps in reducing code repetition and makes the program organized."
            },
            {
                id: "py2",
                question: "What are the three types of functions in Python?",
                answer: "The three types are: Built-in functions (e.g., print()), Functions defined in modules (e.g., math.sqrt()), and User-defined functions created by the programmer."
            },
            {
                id: "py3",
                question: "What is a built-in function? Give an example.",
                answer: "Built-in functions are pre-defined in Python and are always available for use. Examples: len(), type(), input()."
            },
            {
                id: "py4",
                question: "What are module-defined functions?",
                answer: "These are functions that are not built into the core Python language but are available in standard libraries. You must import the module first, like import random."
            },
            {
                id: "py5",
                question: "How do you create a user-defined function?",
                answer: "You create it using the def keyword followed by the function name, parentheses, and a colon. Example: def my_function():"
            },
            {
                id: "py6",
                question: "What is the difference between arguments and parameters?",
                answer: "Parameters are the variables written inside the parentheses during function definition. Arguments are the actual values passed to the function when it is called."
            },
            {
                id: "py7",
                question: "What are default parameters?",
                answer: "Default parameters assume a default value if no value is provided in the function call for that argument. Example: def greet(name='User'):"
            },
            {
                id: "py8",
                question: "What are positional parameters?",
                answer: "These are arguments passed to a function in the exact correct positional order. The first argument maps to the first parameter, the second to the second, and so on."
            },
            {
                id: "py9",
                question: "Can a function return multiple values?",
                answer: "Yes, in Python, a function can return multiple values by separating them with commas. Python automatically packs them into a tuple."
            },
            {
                id: "py10",
                question: "What does the return statement do?",
                answer: "The return statement ends the function's execution and sends a result (value) back to the caller."
            },
            {
                id: "py11",
                question: "What does a function return if there is no return statement?",
                answer: "If a function doesn't have a return statement, it automatically returns the special value None."
            },
            {
                id: "py12",
                question: "What is the 'flow of execution'?",
                answer: "The flow of execution refers to the order in which statements are executed in a program, usually from top to bottom, but changed by function calls and loops."
            },
            {
                id: "py13",
                question: "What is a local variable (local scope)?",
                answer: "A variable created inside a function belongs to the local scope of that function and can only be used inside that specific function."
            },
            {
                id: "py14",
                question: "What is a global variable (global scope)?",
                answer: "A variable created in the main body of the Python code is a global variable. It can be accessed from any scope, global or local."
            },
            {
                id: "py15",
                question: "What is the use of the global keyword?",
                answer: "The global keyword is used inside a function to modify a global variable, telling Python not to create a new local variable with the same name."
            },
            {
                id: "py16",
                question: "Can a local variable have the same name as a global variable?",
                answer: "Yes. Inside the function, the local variable will hide the global variable. They are treated as two completely separate variables."
            },
            {
                id: "py17",
                question: "What happens if positional arguments are missing during a function call?",
                answer: "Python will raise a TypeError indicating that the function is missing required positional arguments."
            },
            {
                id: "py18",
                question: "What is a function header?",
                answer: "The function header is the first line of a function definition that begins with def, contains the function name, parameters, and ends with a colon (:)."
            },
            {
                id: "py19",
                question: "Why do we use functions?",
                answer: "We use functions for code reusability, better readability, and to break a large complex program into smaller, manageable modules."
            },
            {
                id: "py20",
                question: "What is an argument mismatch error?",
                answer: "It occurs when the number of arguments passed during a function call does not match the number of parameters defined in the function header."
            },
            {
                id: "py21",
                question: "Where must default arguments be placed in a function header?",
                answer: "Default arguments must always follow non-default (positional) arguments. Placing a default argument before a positional one causes a syntax error."
            },
            {
                id: "py22",
                question: "How are variables resolved in Python?",
                answer: "Python resolves variable scope using the LEGB rule: Local, Enclosing, Global, and finally Built-in scopes."
            },
            {
                id: "py23",
                question: "Give an example of a function returning a value.",
                answer: "def add(a, b): return a + b. Calling add(2, 3) gives back the value 5."
            },
            {
                id: "py24",
                question: "What is the output of a function that just prints a value but returns nothing?",
                answer: "The output to the screen will be the printed value, but if you assign the function call to a variable, the variable will hold None."
            },
            {
                id: "py25",
                question: "How do you call a function?",
                answer: "By writing the function's name followed by parentheses containing any required arguments. Example: my_func(10, 20)."
            },
            
            // Files (Page 15-17)
            {
                id: "py26",
                question: "What is a file in Python?",
                answer: "A file is a named location on a secondary storage device (like a hard disk) used to store related information permanently."
            },
            {
                id: "py27",
                question: "Name the three main types of files handled in Python.",
                answer: "The three main types are Text files, Binary files, and CSV (Comma Separated Values) files."
            },
            {
                id: "py28",
                question: "What is a text file?",
                answer: "A text file stores data in plain text characters (like ASCII or Unicode). Every line is typically terminated by a special character known as End-Of-Line (EOL), like \\n."
            },
            {
                id: "py29",
                question: "What is a binary file?",
                answer: "A binary file stores data in the exact same format as it is held in computer memory (0s and 1s). It is faster and requires no translation, but isn't human-readable."
            },
            {
                id: "py30",
                question: "What is a CSV file?",
                answer: "CSV stands for Comma Separated Values. It is a simple text format used to store tabular data (like spreadsheets or databases) where values are separated by commas."
            },
            {
                id: "py31",
                question: "What is the main difference between text and binary files?",
                answer: "Text files store human-readable characters and use newline translations. Binary files store unformatted data bytes and do not translate newline characters."
            },
            {
                id: "py32",
                question: "What is an absolute path?",
                answer: "An absolute path specifies the exact, complete location of a file starting from the root directory (e.g., C:\\Users\\Admin\\Documents\\file.txt)."
            },
            {
                id: "py33",
                question: "What is a relative path?",
                answer: "A relative path specifies the location of a file relative to the current working directory (e.g., data\\file.txt or ..\\file.txt)."
            },
            {
                id: "py34",
                question: "Why do we need file handling?",
                answer: "RAM is volatile, meaning data is lost when the program ends. File handling allows us to save data permanently to a hard drive for future use."
            },
            {
                id: "py35",
                question: "What is the default file mode in Python?",
                answer: "If no mode is specified, Python opens files in read-only text mode ('r')."
            },
            
            // Text File Operations
            {
                id: "py36",
                question: "Which function is used to open a file in Python?",
                answer: "The open() function is used. Example: f = open('data.txt', 'r')"
            },
            {
                id: "py37",
                question: "What does the 'r' mode do?",
                answer: "It opens a file for reading only. The file pointer is placed at the beginning. If the file does not exist, it raises a FileNotFoundException."
            },
            {
                id: "py38",
                question: "What is the difference between 'w' and 'a' mode?",
                answer: "'w' (write) overwrites existing data or creates a new file. 'a' (append) adds new data to the end of the file without deleting existing data."
            },
            {
                id: "py39",
                question: "What does the 'r+' mode do?",
                answer: "It opens a file for both reading and writing. The file pointer is placed at the beginning, and existing data can be overwritten."
            },
            {
                id: "py40",
                question: "What does the 'w+' mode do?",
                answer: "It opens a file for both reading and writing, but it truncates (clears) the file first. If the file doesn't exist, it creates a new one."
            },
            {
                id: "py41",
                question: "What does the 'a+' mode do?",
                answer: "It opens a file for both reading and appending. The file pointer is at the end of the file, allowing you to add new data and read the file."
            },
            {
                id: "py42",
                question: "Why is it important to close a text file?",
                answer: "Closing a file frees up system resources and ensures that all data in the memory buffer is properly written and saved to the disk."
            },
            {
                id: "py43",
                question: "What is the advantage of using the with clause to open a file?",
                answer: "The with statement automatically closes the file for you when the block of code exits, even if an error occurs."
            },
            {
                id: "py44",
                question: "What is the difference between write() and writelines()?",
                answer: "write() inserts a single string into the file. writelines() inserts a list of strings into the file."
            },
            {
                id: "py45",
                question: "Does writelines() add newline characters automatically?",
                answer: "No, writelines() does not add newline characters. You must manually add \\n to the end of your strings in the list."
            },
            {
                id: "py46",
                question: "What does read() do?",
                answer: "read() reads the entire content of the file and returns it as a single string."
            },
            {
                id: "py47",
                question: "What does read(n) do?",
                answer: "It reads exactly n bytes (characters) from the file. If n is missing, it reads until the end of the file."
            },
            {
                id: "py48",
                question: "What is the difference between readline() and readlines()?",
                answer: "readline() reads only one line at a time and returns a string. readlines() reads all lines and returns them as a list of strings."
            },
            {
                id: "py49",
                question: "What does the tell() method do?",
                answer: "The tell() method returns the current position (byte offset) of the file pointer within the file."
            },
            {
                id: "py50",
                question: "What does the seek() method do?",
                answer: "The seek(offset) method is used to change the file pointer's current position to the specified byte offset."
            },
            {
                id: "py51",
                question: "How do you move the file pointer to the very beginning of the file?",
                answer: "You use file_object.seek(0)."
            },
            {
                id: "py52",
                question: "What happens if you try to read() from a file opened in 'w' mode?",
                answer: "Python will raise an io.UnsupportedOperation error because the file is opened for writing only."
            },
            {
                id: "py53",
                question: "How do you write the string 'Hello' to a file object?",
                answer: "Using the command: f.write('Hello')."
            },
            {
                id: "py54",
                question: "What happens when you open an existing file in 'w' mode?",
                answer: "All previous data in that file is immediately erased (truncated), and it starts as a blank file."
            },
            {
                id: "py55",
                question: "What does the flush() method do?",
                answer: "It forcefully writes the internal buffer's data to the disk immediately, without waiting for the file to be closed."
            },
            {
                id: "py56",
                question: "Write the syntax to open a file using the with clause.",
                answer: "with open('file.txt', 'r') as f:"
            },
            {
                id: "py57",
                question: "How to loop through a text file line by line efficiently?",
                answer: "You can use a for loop directly on the file object: for line in f: print(line)"
            },
            {
                id: "py58",
                question: "How do you remove leading/trailing whitespaces or newlines when reading a line?",
                answer: "You can use the .strip() method on the string. For example: line.strip()."
            },
            {
                id: "py59",
                question: "What is the standard newline character in text files on Unix/Linux systems?",
                answer: "The newline character is \\n."
            },
            {
                id: "py60",
                question: "Can we read a text file using a relative path?",
                answer: "Yes, as long as the file is located relative to the folder where your Python script is currently running."
            },
            
            // Binary Files
            {
                id: "py61",
                question: "Which module must be imported to work with binary files?",
                answer: "You must import the pickle module."
            },
            {
                id: "py62",
                question: "What is pickling (serialization)?",
                answer: "Pickling is the process of converting Python objects (like lists, dictionaries) into a byte stream to save them into a binary file."
            },
            {
                id: "py63",
                question: "What is unpickling (deserialization)?",
                answer: "Unpickling is the process of converting a byte stream from a binary file back into a usable Python object."
            },
            {
                id: "py64",
                question: "Which file mode is used to write data to a binary file?",
                answer: "The 'wb' (write binary) or 'ab' (append binary) modes are used."
            },
            {
                id: "py65",
                question: "Which file mode is used to read data from a binary file?",
                answer: "The 'rb' (read binary) mode is used."
            },
            {
                id: "py66",
                question: "What do 'rb+', 'wb+', and 'ab+' modes mean?",
                answer: "They are read-write modes for binary files. 'rb+' reads/writes without truncating, 'wb+' overwrites/reads, and 'ab+' appends/reads."
            },
            {
                id: "py67",
                question: "What method is used to write (pickle) data into a binary file?",
                answer: "The pickle.dump(object, file_handle) method is used."
            },
            {
                id: "py68",
                question: "What method is used to read (unpickle) data from a binary file?",
                answer: "The pickle.load(file_handle) method is used."
            },
            {
                id: "py69",
                question: "Why do we use binary files instead of text files?",
                answer: "Binary files are faster for the computer to read/write, secure (not easily human-readable), and perfect for storing complex data structures like dictionaries."
            },
            {
                id: "py70",
                question: "What error is raised when pickle.load() reaches the end of the file?",
                answer: "It raises an EOFError (End Of File Error)."
            },
            {
                id: "py71",
                question: "How do you handle an EOFError when reading all records from a binary file?",
                answer: "You place the pickle.load() inside an infinite while True: loop and use a try...except EOFError: block to break the loop."
            },
            {
                id: "py72",
                question: "Can you append data to an existing binary file?",
                answer: "Yes, by opening the file in 'ab' (append binary) mode and using pickle.dump()."
            },
            {
                id: "py73",
                question: "How do you search for a specific record in a binary file?",
                answer: "You load the records one by one using a loop, check the condition (e.g., if record['rollno'] == 10:), and print if a match is found."
            },
            {
                id: "py74",
                question: "How do you update a record in a binary file?",
                answer: "Read all data into a temporary list, modify the specific record in the list, and then write (wb) the entire list back to the file."
            }
        ]
    },

    // ===== CHAPTER 5: SOCIETAL IMPACTS (20 Questions) =====
    societalImpacts: {
        chapterName: "Societal Impacts",
        questions: [
            {
                id: "social1",
                question: "What is a digital footprint?",
                answer: "It is the trail of data you leave behind when you use the internet (e.g., websites visited, posts liked)."
            },
            {
                id: "social2",
                question: "What are net etiquettes (netiquette)?",
                answer: "They are the basic rules of polite and respectful behavior to follow while communicating online."
            },
            {
                id: "social3",
                question: "Why is it important not to type in ALL CAPS while communicating online?",
                answer: "In netiquette, typing in all caps is considered rude and is interpreted as SHOUTING."
            },
            {
                id: "social4",
                question: "What is the goal of data protection?",
                answer: "To safeguard important information from corruption, compromise, or loss."
            },
            {
                id: "social5",
                question: "What are Intellectual Property Rights (IPR)?",
                answer: "IPR are legal rights given to creators over the creations of their mind, like inventions or artistic works."
            },
            {
                id: "social6",
                question: "What is plagiarism?",
                answer: "It is the act of using someone else's work or ideas and presenting them as your own without giving credit."
            },
            {
                id: "social7",
                question: "What is the main difference between copyright and licensing?",
                answer: "Copyright is a legal right owned by the creator, while a license is permission granted to someone else to use that work."
            },
            {
                id: "social8",
                question: "What does FOSS stand for?",
                answer: "Free and Open-Source Software."
            },
            {
                id: "social9",
                question: "What is the key idea behind FOSS software?",
                answer: "It gives users the freedom to run, study, modify, and distribute the software."
            },
            {
                id: "social10",
                question: "Define hacking in simple terms.",
                answer: "It is the unauthorized access to or manipulation of a computer system or network."
            },
            {
                id: "social11",
                question: "What is phishing?",
                answer: "A cybercrime where attackers trick people into revealing sensitive information (like passwords) by pretending to be a trusted entity."
            },
            {
                id: "social12",
                question: "What is cyber bullying?",
                answer: "It is the use of electronic communication to bully, threaten, or harass someone."
            },
            {
                id: "social13",
                question: "What is the primary cyber law in India?",
                answer: "The Information Technology Act (IT Act), 2000."
            },
            {
                id: "social14",
                question: "Name one common type of cybercrime that targets an individual's financial information.",
                answer: "Phishing or online banking fraud."
            },
            {
                id: "social15",
                question: "What is e-waste?",
                answer: "It refers to discarded electronic devices and components, like old computers, phones, and TVs."
            },
            {
                id: "social16",
                question: "Why is e-waste considered hazardous?",
                answer: "Because it contains toxic materials like lead and mercury that can harm the environment and human health if not disposed of properly."
            },
            {
                id: "social17",
                question: "What does e-waste management involve?",
                answer: "It involves the proper collection, recycling, and disposal of electronic waste to minimize its harmful impact."
            },
            {
                id: "social18",
                question: "Name a health concern related to prolonged use of technology.",
                answer: "Computer Vision Syndrome (CVS) or eye strain."
            },
            {
                id: "social19",
                question: "How can excessive use of smartphones affect physical health?",
                answer: "It can lead to problems like 'text neck' (neck pain) and poor posture."
            },
            {
                id: "social20",
                question: "What is a simple way to reduce health risks while using a computer?",
                answer: "Take regular breaks, maintain a good posture, and ensure proper lighting to avoid eye strain."
            }
        ]
    },

    // ===== CHAPTER 6: EMERGING TRENDS (50 Questions) =====
    emergingTrends: {
        chapterName: "Emerging Trends",
        questions: [
            // AI & ML (Page 53)
            {
                id: "trend1",
                question: "What is Artificial Intelligence (AI)?",
                answer: "AI is a branch of computer science that aims to create machines capable of intelligent behavior, mimicking human thought processes like learning and problem-solving."
            },
            {
                id: "trend2",
                question: "Give a common everyday example of AI.",
                answer: "Virtual assistants like Siri, Alexa, or Google Assistant, and recommendation systems on Netflix or YouTube are common AI examples."
            },
            {
                id: "trend3",
                question: "What is Machine Learning (ML)?",
                answer: "ML is a subset of AI where systems learn and improve from past data and experience without being explicitly programmed for every scenario."
            },
            {
                id: "trend4",
                question: "How does ML differ from traditional programming?",
                answer: "In traditional programming, you feed rules and data to get answers. In ML, you feed data and answers to the system, and it learns the rules automatically."
            },
            {
                id: "trend5",
                question: "What is Natural Language Processing (NLP)?",
                answer: "NLP is a branch of AI that helps computers understand, interpret, and generate human languages (both spoken and written)."
            },
            {
                id: "trend6",
                question: "Give an example of an NLP application.",
                answer: "Language translation apps (like Google Translate), spell-checkers, and sentiment analysis tools on social media all use NLP."
            },
            {
                id: "trend7",
                question: "What is a chatbot?",
                answer: "A chatbot is an AI program designed to simulate conversation with human users, especially over the Internet, using NLP to understand queries."
            },
            {
                id: "trend8",
                question: "What is the role of training data in Machine Learning?",
                answer: "Training data is the initial dataset used to teach an ML model how to recognize patterns, make predictions, or perform specific tasks."
            },
            {
                id: "trend9",
                question: "What is deep learning?",
                answer: "Deep learning is an advanced subset of ML that uses multi-layered artificial neural networks (inspired by the human brain) to solve highly complex problems."
            },
            {
                id: "trend10",
                question: "What is computer vision?",
                answer: "It is a field of AI that trains computers to interpret and understand the visual world, such as recognizing faces in photos or guiding self-driving cars."
            },
            
            // AR & VR
            {
                id: "trend11",
                question: "What does 'Immersive Experience' mean?",
                answer: "It refers to technologies that create a simulated environment or blend the real and virtual worlds, pulling the user into a highly engaging digital experience."
            },
            {
                id: "trend12",
                question: "What is Virtual Reality (VR)?",
                answer: "VR is a completely computer-generated 3D environment that users can explore and interact with, completely shutting out the physical world."
            },
            {
                id: "trend13",
                question: "What hardware is typically required for VR?",
                answer: "Users usually need a VR headset (like Meta Quest or HTC Vive) equipped with screens and motion sensors to experience the virtual world."
            },
            {
                id: "trend14",
                question: "What is Augmented Reality (AR)?",
                answer: "AR overlays digital elements (images, text, sounds) onto the real physical world, usually viewed through a smartphone camera or AR glasses."
            },
            {
                id: "trend15",
                question: "Give a popular example of Augmented Reality.",
                answer: "The game Pokémon GO or Snapchat/Instagram face filters are classic examples of AR."
            },
            {
                id: "trend16",
                question: "What is the primary difference between AR and VR?",
                answer: "VR replaces your reality entirely with a digital one, while AR adds digital elements to your existing real-world view."
            },
            
            // Robotics (Page 54)
            {
                id: "trend17",
                question: "What is Robotics?",
                answer: "Robotics is an interdisciplinary branch involving the design, construction, operation, and use of robots to perform tasks traditionally done by humans."
            },
            {
                id: "trend18",
                question: "What are the three essential components of a robot?",
                answer: "Mechanical structure (body), sensors (to perceive the environment), and a control system/computer (the brain that processes data and gives commands)."
            },
            {
                id: "trend19",
                question: "What is a humanoid robot?",
                answer: "A humanoid robot is a robot designed with a body shape built to resemble the human body (e.g., Sophia or Honda's ASIMO)."
            },
            {
                id: "trend20",
                question: "What is a drone?",
                answer: "A drone, or Unmanned Aerial Vehicle (UAV), is a flying robot that can be remotely controlled or fly autonomously using software flight plans."
            },
            
            // Big Data
            {
                id: "trend21",
                question: "What is Big Data?",
                answer: "Big Data refers to massive, complex datasets that grow so rapidly that traditional database management tools cannot store or process them efficiently."
            },
            {
                id: "trend22",
                question: "What are the defining characteristics (The 5 V's) of Big Data?",
                answer: "Volume, Velocity, Variety, Veracity, and Value."
            },
            {
                id: "trend23",
                question: "What does 'Volume' refer to in Big Data?",
                answer: "It refers to the massive amount of data generated every second from social media, sensors, transactions, and devices (often measured in terabytes or petabytes)."
            },
            {
                id: "trend24",
                question: "What does 'Velocity' mean in Big Data?",
                answer: "Velocity is the extreme speed at which new data is generated and moves around (e.g., millions of tweets or stock market trades per second)."
            },
            {
                id: "trend25",
                question: "What does 'Variety' refer to in Big Data?",
                answer: "It refers to the different types of data formats, including structured (tables), semi-structured (XML/JSON), and unstructured (videos, emails, audio)."
            },
            {
                id: "trend26",
                question: "What do 'Veracity' and 'Value' mean?",
                answer: "Veracity refers to the trustworthiness or accuracy of the data. Value refers to the usefulness of the insights that can be extracted from the data."
            },
            {
                id: "trend27",
                question: "Why do traditional relational databases (RDBMS) struggle with Big Data?",
                answer: "They are designed to handle structured data in tables and scale vertically, making them too slow and expensive to handle the unstructured nature and sheer volume of Big Data."
            },
            
            // IoT (Page 54-55)
            {
                id: "trend28",
                question: "What is the Internet of Things (IoT)?",
                answer: "IoT is a network of physical devices (vehicles, home appliances, etc.) embedded with sensors, software, and internet connectivity, allowing them to exchange data."
            },
            {
                id: "trend29",
                question: "What is the role of a Sensor in IoT?",
                answer: "Sensors detect and measure physical properties from the environment (like temperature, motion, or light) and convert them into digital data for the IoT system."
            },
            {
                id: "trend30",
                question: "What is an actuator in an IoT system?",
                answer: "While a sensor gathers data, an actuator takes action based on that data (e.g., turning on a motor, unlocking a door, or switching on a light)."
            },
            {
                id: "trend31",
                question: "Give a simple example of an IoT device.",
                answer: "A smart thermostat that learns your temperature preferences and can be controlled via an app on your smartphone."
            },
            {
                id: "trend32",
                question: "What is a Smart City?",
                answer: "A smart city uses IoT sensors, networks, and data analytics to optimize city operations, manage resources efficiently, and improve the quality of life for citizens."
            },
            {
                id: "trend33",
                question: "How can IoT improve traffic management in a Smart City?",
                answer: "Sensors on roads and traffic lights can detect vehicle density in real-time, automatically adjusting traffic light timings to reduce congestion."
            },
            {
                id: "trend34",
                question: "What is a Smart Grid?",
                answer: "It is an electrical grid integrated with IoT sensors and software to monitor power usage, detect outages instantly, and route electricity more efficiently."
            },
            {
                id: "trend35",
                question: "What is the biggest challenge or concern with IoT?",
                answer: "Security and privacy. Because billions of devices are connected to the internet, they are vulnerable to hacking and unauthorized data access."
            },
            
            // Cloud Computing (Page 55)
            {
                id: "trend36",
                question: "What is Cloud Computing?",
                answer: "It is the delivery of computing services—including servers, storage, databases, and software—over the Internet ('the cloud') rather than on local hard drives."
            },
            {
                id: "trend37",
                question: "What is the main advantage of Cloud Computing?",
                answer: "Cost-effectiveness and scalability. You only pay for what you use, and you can easily upgrade or downgrade your storage/processing power on demand."
            },
            {
                id: "trend38",
                question: "What are the three main service models of Cloud Computing?",
                answer: "SaaS (Software as a Service), PaaS (Platform as a Service), and IaaS (Infrastructure as a Service)."
            },
            {
                id: "trend39",
                question: "What is SaaS (Software as a Service)?",
                answer: "It is a model where complete, fully functional software applications are hosted in the cloud and accessed by users via a web browser."
            },
            {
                id: "trend40",
                question: "Give an example of SaaS.",
                answer: "Google Workspace (Docs, Drive, Gmail), Microsoft 365, and Zoom are all SaaS products."
            },
            {
                id: "trend41",
                question: "What is PaaS (Platform as a Service)?",
                answer: "PaaS provides a cloud-based environment (platform) with tools for software developers to build, test, and deploy their own applications without worrying about underlying hardware."
            },
            {
                id: "trend42",
                question: "What is IaaS (Infrastructure as a Service)?",
                answer: "IaaS provides basic computing infrastructure over the internet, such as virtual servers, network connections, and storage space, which the user configures themselves."
            },
            {
                id: "trend43",
                question: "Give an example of IaaS.",
                answer: "Amazon Web Services (AWS) EC2, Google Compute Engine, and Microsoft Azure virtual machines."
            },
            {
                id: "trend44",
                question: "What is a Public Cloud?",
                answer: "Cloud resources (like servers and storage) that are owned and operated by a third-party cloud service provider and delivered over the internet to multiple organizations."
            },
            {
                id: "trend45",
                question: "What is a Private Cloud?",
                answer: "Cloud computing resources used exclusively by a single business or organization, offering higher security and control over the data."
            },
            
            // Blockchain (Page 55)
            {
                id: "trend46",
                question: "What is Grid Computing?",
                answer: "It is a distributed computing model where a network of geographically dispersed computers works together to solve a single, massive, complex computational problem."
            },
            {
                id: "trend47",
                question: "How does Grid Computing differ from Cloud Computing?",
                answer: "Grid computing focuses on combining the processing power of many computers for one specific, heavy mathematical task, while cloud computing provides varied IT services on demand."
            },
            {
                id: "trend48",
                question: "What is Blockchain Technology?",
                answer: "Blockchain is a decentralized, distributed, public digital ledger that records transactions across many computers securely, transparently, and immutably (cannot be changed)."
            },
            {
                id: "trend49",
                question: "Why is Blockchain considered highly secure?",
                answer: "Data is stored in 'blocks' linked together in a 'chain' using strong cryptography. Altering one block requires altering all subsequent blocks across the entire decentralized network, which is practically impossible."
            },
            {
                id: "trend50",
                question: "What is a common application of Blockchain technology?",
                answer: "Cryptocurrencies like Bitcoin are the most famous application, allowing secure peer-to-peer financial transactions without a central bank."
            }
        ]
    },

    // ===== CHAPTER 7: PYTHON INTRODUCTION (50 Questions) =====
    pythonIntro: {
        chapterName: "Python Introduction",
        questions: [
            // Page 46-47
            {
                id: "pyIntro1",
                question: "What are the two modes of the Python interpreter?",
                answer: "Interactive mode (executes code line-by-line instantly) and Script mode (saves code in a .py file and runs it all at once)."
            },
            {
                id: "pyIntro2",
                question: "Why is indentation crucial in Python?",
                answer: "Unlike other languages that use curly brackets { }, Python uses indentation (spaces/tabs) to define blocks of code like loops and functions."
            },
            {
                id: "pyIntro3",
                question: "What is an identifier?",
                answer: "An identifier is a user-defined name given to variables, functions, classes, etc. (e.g., age, calculate_sum)."
            },
            {
                id: "pyIntro4",
                question: "What are the rules for naming an identifier?",
                answer: "It must start with a letter (A-Z, a-z) or underscore (_). It cannot start with a number and cannot contain special characters like @, $ or spaces."
            },
            {
                id: "pyIntro5",
                question: "What is a keyword in Python?",
                answer: "Keywords are reserved words that have a special meaning in Python (e.g., if, for, True). They cannot be used as identifier names."
            },
            {
                id: "pyIntro6",
                question: "Are Python keywords case-sensitive?",
                answer: "Yes. For example, True and False are valid keywords, but true and false are not."
            },
            {
                id: "pyIntro7",
                question: "What is a variable?",
                answer: "A variable is a named memory location used to store data temporarily during program execution (e.g., x = 10)."
            },
            {
                id: "pyIntro8",
                question: "Do we need to declare the data type of a variable in Python?",
                answer: "No, Python is dynamically typed. The type is automatically assigned based on the value (e.g., x = 5 makes x an integer)."
            },
            {
                id: "pyIntro9",
                question: "What is a constant?",
                answer: "A constant is a type of variable whose value cannot be changed. In Python, we usually write constant names in ALL_CAPS by convention (e.g., PI = 3.14)."
            },
            {
                id: "pyIntro10",
                question: "How do you write a comment in Python?",
                answer: "Use the hash symbol # for a single-line comment. Comments are ignored by the Python interpreter."
            },
            {
                id: "pyIntro11",
                question: "How do you assign multiple values to multiple variables in one line?",
                answer: "You can use commas: a, b, c = 1, 2, 3."
            },
            {
                id: "pyIntro12",
                question: "How do you swap two variables without a third temporary variable?",
                answer: "In Python, it's as simple as: a, b = b, a."
            },
            {
                id: "pyIntro13",
                question: "What is the extension of a Python file?",
                answer: "Python script files are saved with a .py extension."
            },
            {
                id: "pyIntro14",
                question: "What happens if you forget to indent a block properly?",
                answer: "The Python interpreter will throw an IndentationError and stop execution."
            },
            {
                id: "pyIntro15",
                question: "What is debugging?",
                answer: "Debugging is the process of identifying, analyzing, and fixing errors (bugs) in a program to make it run correctly."
            },
            
            // Data Types & Mutability (Page 46-47)
            {
                id: "pyIntro16",
                question: "What is a data type?",
                answer: "It classifies the type of value a variable holds, such as integer, float, string, or boolean."
            },
            {
                id: "pyIntro17",
                question: "What is the difference between mutable and immutable data types?",
                answer: "Mutable data types can be changed after creation (e.g., Lists, Dictionaries). Immutable data types cannot be changed (e.g., Strings, Integers, Tuples)."
            },
            {
                id: "pyIntro18",
                question: "Which built-in function is used to check the data type of a variable?",
                answer: "The type() function. For example, type(5) returns <class 'int'>."
            },
            {
                id: "pyIntro19",
                question: "What is type conversion (type casting)?",
                answer: "It is the process of converting one data type into another, like converting a string '5' into an integer using int('5')."
            },
            {
                id: "pyIntro20",
                question: "What is implicit type conversion?",
                answer: "It happens automatically when Python converts a smaller data type to a larger one to prevent data loss (e.g., adding an int and a float results in a float)."
            },
            {
                id: "pyIntro21",
                question: "What does the int() function do?",
                answer: "It converts a string or a float to an integer. Example: int(3.8) becomes 3."
            },
            {
                id: "pyIntro22",
                question: "Are strings mutable in Python?",
                answer: "No, strings are immutable. You cannot change a character of a string in place; you must create a new string."
            },
            {
                id: "pyIntro23",
                question: "What is a boolean data type?",
                answer: "It is a data type that can hold only one of two values: True or False."
            },
            {
                id: "pyIntro24",
                question: "How do you convert a number to a string?",
                answer: "Use the str() function. Example: str(100) becomes '100'."
            },
            {
                id: "pyIntro25",
                question: "What happens if you try to modify an immutable data type?",
                answer: "Python will throw a TypeError."
            },
            
            // Operators & Expressions (Page 47-48)
            {
                id: "pyIntro26",
                question: "What is an expression?",
                answer: "An expression is a combination of variables, operators, and values that evaluates to a single result (e.g., 5 + 3 * 2)."
            },
            {
                id: "pyIntro27",
                question: "What is the difference between / and // operators?",
                answer: "/ is normal division and always returns a float (e.g., 5 / 2 = 2.5). // is floor division and returns an integer (e.g., 5 // 2 = 2)."
            },
            {
                id: "pyIntro28",
                question: "What does the % (modulus) operator do?",
                answer: "It returns the remainder of a division. Example: 10 % 3 returns 1."
            },
            {
                id: "pyIntro29",
                question: "What is the ** operator?",
                answer: "It is the exponentiation operator. 2 ** 3 means 2 raised to the power of 3, which equals 8."
            },
            {
                id: "pyIntro30",
                question: "What is operator precedence?",
                answer: "It is the rule that determines the order in which operators are evaluated. Python follows PEMDAS/BODMAS."
            },
            {
                id: "pyIntro31",
                question: "What are relational (comparison) operators?",
                answer: "They compare two values and return a boolean (True or False). Examples include ==, !=, >, <, >=, <=."
            },
            {
                id: "pyIntro32",
                question: "What is the difference between = and ==?",
                answer: "= is an assignment operator used to assign a value to a variable. == is a comparison operator used to check if two values are equal."
            },
            {
                id: "pyIntro33",
                question: "What are logical operators?",
                answer: "and, or, and not. They are used to combine multiple conditional statements."
            },
            {
                id: "pyIntro34",
                question: "Evaluate the expression: not (5 > 3).",
                answer: "False. 5 > 3 is True, and the not operator reverses it to False."
            },
            {
                id: "pyIntro35",
                question: "What is the output of True and False?",
                answer: "False. The and operator requires both sides to be True to result in True."
            },
            {
                id: "pyIntro36",
                question: "What are shorthand assignment operators?",
                answer: "Operators like +=, -=, *=. For example, x += 5 is exactly the same as x = x + 5."
            },
            {
                id: "pyIntro37",
                question: "What are membership operators?",
                answer: "in and not in. They check if a value is present in a sequence (like a string or list)."
            },
            {
                id: "pyIntro38",
                question: "What is the result of 'p' in 'apple'?",
                answer: "True, because the character 'p' is inside the string 'apple'."
            },
            {
                id: "pyIntro39",
                question: "What is a statement in Python?",
                answer: "A statement is an instruction that the Python interpreter can execute (e.g., x = 5 or print(x))."
            },
            {
                id: "pyIntro40",
                question: "How are expressions evaluated?",
                answer: "From left to right, following the rules of operator precedence and associativity."
            },
            
            // Input/Output & Control (Page 48-49)
            {
                id: "pyIntro41",
                question: "How do you take input from the user?",
                answer: "Using the input() function. Example: name = input('Enter your name: ')."
            },
            {
                id: "pyIntro42",
                question: "What is the default data type of the value returned by input()?",
                answer: "It always returns a String."
            },
            {
                id: "pyIntro43",
                question: "How do you accept an integer input from the user?",
                answer: "You must typecast the input using int(). Example: age = int(input('Enter age: '))."
            },
            {
                id: "pyIntro44",
                question: "What does the print() statement do?",
                answer: "It displays output to the screen/console."
            },
            {
                id: "pyIntro45",
                question: "How do you prevent print() from moving to a new line?",
                answer: "Use the end parameter. Example: print('Hello', end=' ') will keep the cursor on the same line with a space."
            },
            {
                id: "pyIntro46",
                question: "What is the if statement used for?",
                answer: "It is used for decision-making. The code block inside the if runs only if its condition evaluates to True."
            },
            {
                id: "pyIntro47",
                question: "What is the purpose of the elif keyword?",
                answer: "elif stands for 'else if'. It is used to check multiple conditions consecutively if the previous if conditions were False."
            },
            {
                id: "pyIntro48",
                question: "What does the else block do?",
                answer: "It executes automatically if all preceding if and elif conditions evaluate to False."
            },
            {
                id: "pyIntro49",
                question: "What is a for loop?",
                answer: "A for loop is used to iterate over a sequence (like a list, string, or range) and execute a block of code for each item."
            },
            {
                id: "pyIntro50",
                question: "What does the range() function do?",
                answer: "It generates a sequence of numbers. range(5) generates numbers from 0 to 4."
            }
        ]
    },

    // ===== CHAPTER 8: LISTS & DICTIONARIES (50 Questions) =====
    listsDicts: {
        chapterName: "Lists & Dictionaries",
        questions: [
            // Lists (Page 49-50)
            {
                id: "list1",
                question: "What is a List?",
                answer: "A list is an ordered, mutable collection of elements enclosed in square brackets []. Example: L = [1, 2, 3]."
            },
            {
                id: "list2",
                question: "Can a list hold different data types?",
                answer: "Yes, lists are heterogeneous. Example: ['Apple', 10, 3.14, True] is a valid list."
            },
            {
                id: "list3",
                question: "How do you create an empty list?",
                answer: "L = [] or L = list()."
            },
            {
                id: "list4",
                question: "How does indexing work in lists?",
                answer: "Lists are zero-indexed. The first element is at index 0, the second at 1, and so on."
            },
            {
                id: "list5",
                question: "What is negative indexing?",
                answer: "Python allows negative indexing from the end. -1 refers to the last element, -2 to the second last, etc."
            },
            {
                id: "list6",
                question: "How do you traverse a list?",
                answer: "Using a for loop: for item in my_list: print(item)."
            },
            {
                id: "list7",
                question: "What does the len() function do for lists?",
                answer: "It returns the total number of elements present in the list."
            },
            {
                id: "list8",
                question: "What does list.append(item) do?",
                answer: "It adds a single item to the very end of the list."
            },
            {
                id: "list9",
                question: "What is the difference between append() and extend()?",
                answer: "append() adds one element as a single object. extend() adds multiple elements from an iterable (like another list) to the end."
            },
            {
                id: "list10",
                question: "How do you insert an item at a specific index?",
                answer: "Use insert(index, item). Example: L.insert(1, 'Hello') places 'Hello' at index 1."
            },
            {
                id: "list11",
                question: "What does list.count(item) do?",
                answer: "It returns the number of times a specific item appears in the list."
            },
            {
                id: "list12",
                question: "How do you remove a specific value from a list?",
                answer: "Use list.remove(value). It removes the first occurrence of that value."
            },
            {
                id: "list13",
                question: "What does list.pop() do?",
                answer: "It removes and returns the last element of the list. If you provide an index, like pop(2), it removes the element at that index."
            },
            {
                id: "list14",
                question: "How do you reverse a list?",
                answer: "Use the list.reverse() method. It reverses the elements directly in the original list."
            },
            {
                id: "list15",
                question: "What is the difference between sort() and sorted()?",
                answer: "list.sort() sorts the original list in place. sorted(list) creates and returns a brand new sorted list, leaving the original unchanged."
            },
            {
                id: "list16",
                question: "How do you find the maximum and minimum numbers in a list?",
                answer: "Use the built-in functions max(list) and min(list)."
            },
            {
                id: "list17",
                question: "How do you calculate the sum of all numeric elements in a list?",
                answer: "Use the sum(list) built-in function."
            },
            {
                id: "list18",
                question: "What is list slicing?",
                answer: "Extracting a portion of a list using L[start:stop:step]. Example: L[1:4] gets elements from index 1 to 3."
            },
            {
                id: "list19",
                question: "What is the result of [1, 2] + [3, 4]?",
                answer: "[1, 2, 3, 4]. The + operator concatenates (joins) two lists."
            },
            {
                id: "list20",
                question: "What is the result of [1, 2] * 3?",
                answer: "[1, 2, 1, 2, 1, 2]. The * operator replicates the list."
            },
            {
                id: "list21",
                question: "How do you update a list element?",
                answer: "Access it via its index and assign a new value. Example: L[0] = 100."
            },
            {
                id: "list22",
                question: "Are lists mutable?",
                answer: "Yes, you can modify, add, or remove elements after the list is created."
            },
            {
                id: "list23",
                question: "How do you delete a list element using its index?",
                answer: "Use the del statement. Example: del L[2] deletes the item at index 2."
            },
            {
                id: "list24",
                question: "What error occurs if you try to access an index that doesn't exist?",
                answer: "An IndexError: list index out of range."
            },
            
            // Dictionaries (Page 50-51)
            {
                id: "dict25",
                question: "What is a Dictionary?",
                answer: "A dictionary is an unordered, mutable collection of data stored as key-value pairs, enclosed in curly braces {}."
            },
            {
                id: "dict26",
                question: "How do you separate a key and a value?",
                answer: "Using a colon :. Example: {'name': 'Rahul', 'age': 16}."
            },
            {
                id: "dict27",
                question: "Can a dictionary have duplicate keys?",
                answer: "No. Keys must be unique. If you assign a new value to an existing key, the old value is overwritten."
            },
            {
                id: "dict28",
                question: "Can keys be mutable data types (like lists)?",
                answer: "No. Keys must be immutable (like strings, integers, or tuples). Values, however, can be of any data type."
            },
            {
                id: "dict29",
                question: "How do you access a value in a dictionary?",
                answer: "Using its key in square brackets. Example: my_dict['name']."
            },
            {
                id: "dict30",
                question: "How do you create an empty dictionary?",
                answer: "D = {} or D = dict()."
            },
            {
                id: "dict31",
                question: "How do you add a new key-value pair to a dictionary?",
                answer: "Assign a value to a new key. Example: D['marks'] = 95."
            },
            {
                id: "dict32",
                question: "How do you update an existing value?",
                answer: "Assign a new value to an existing key. Example: D['age'] = 17."
            },
            {
                id: "dict33",
                question: "How do you traverse a dictionary to print all keys?",
                answer: "Using a for loop: for key in D: print(key)."
            },
            {
                id: "dict34",
                question: "What does len() do for a dictionary?",
                answer: "It returns the total number of key-value pairs present in the dictionary."
            },
            {
                id: "dict35",
                question: "What does the dict.keys() method return?",
                answer: "It returns a view object containing all the keys of the dictionary."
            },
            {
                id: "dict36",
                question: "What does the dict.values() method return?",
                answer: "It returns a view object containing all the values of the dictionary."
            },
            {
                id: "dict37",
                question: "What does the dict.items() method return?",
                answer: "It returns a view object containing tuples of all (key, value) pairs."
            },
            {
                id: "dict38",
                question: "What is the advantage of using the get() method?",
                answer: "D.get('key') returns the value if the key exists. If it doesn't, it returns None instead of crashing with a KeyError."
            },
            {
                id: "dict39",
                question: "What does the dict.update() method do?",
                answer: "It merges another dictionary into the current dictionary, adding new pairs and updating existing keys."
            },
            {
                id: "dict40",
                question: "What does dict.clear() do?",
                answer: "It removes all elements from the dictionary, leaving it empty {}."
            },
            {
                id: "dict41",
                question: "How do you delete a specific key-value pair?",
                answer: "Use the del keyword. Example: del D['age']."
            },
            {
                id: "dict42",
                question: "How do you check if a key exists in a dictionary?",
                answer: "Use the in membership operator. Example: if 'name' in D:."
            },
            {
                id: "dict43",
                question: "How do you loop through both keys and values simultaneously?",
                answer: "Use the items() method: for key, value in D.items(): print(key, value)."
            }
        ]
    },

    // ===== CHAPTER 9: DBMS & PYTHON SQL (50 Questions) =====
    dbmsPython: {
        chapterName: "DBMS & Python SQL",
        questions: [
            // Page 36-37
            {
                id: "dbms1",
                question: "What is a Database?",
                answer: "A database is an organized, structured collection of data stored electronically, making it easy to access, manage, and update."
            },
            {
                id: "dbms2",
                question: "What is a DBMS?",
                answer: "DBMS stands for Database Management System. It is software used to create, manage, and manipulate databases (e.g., MySQL, Oracle)."
            },
            {
                id: "dbms3",
                question: "State one primary advantage of DBMS over a traditional file system.",
                answer: "Unlike file systems, a DBMS reduces data duplication (redundancy) and allows multiple users to access data simultaneously."
            },
            {
                id: "dbms4",
                question: "What is Data Redundancy?",
                answer: "Data redundancy is the unnecessary duplication of the same data in multiple places within a database or file system."
            },
            {
                id: "dbms5",
                question: "What is Data Inconsistency?",
                answer: "It occurs when different copies of the same data do not match, usually caused by failing to update redundant data across all files."
            },
            {
                id: "dbms6",
                question: "What is Data Isolation in DBMS?",
                answer: "Data isolation ensures that the application logic is separate from the data structure, meaning changes to the database structure don't break the application."
            },
            {
                id: "dbms7",
                question: "How does a database ensure data security?",
                answer: "It ensures security by assigning user accounts, passwords, and access rights, restricting unauthorized users from viewing or modifying data."
            },
            {
                id: "dbms8",
                question: "What is data integrity?",
                answer: "Data integrity means ensuring that the data stored in a database is accurate, valid, and consistent throughout its lifecycle."
            },
            {
                id: "dbms9",
                question: "Give an example of a popular Relational DBMS.",
                answer: "MySQL, Oracle, PostgreSQL, and Microsoft SQL Server are all popular examples of Relational DBMS."
            },
            {
                id: "dbms10",
                question: "What is a query?",
                answer: "A query is a specific request for data or information retrieved from a database table using a database language like SQL."
            },
            
            // Relational Data Model (Page 36-37)
            {
                id: "dbms11",
                question: "What is a Relational Data Model?",
                answer: "It is a model that organizes data into tables (called relations) consisting of rows and columns, establishing relationships between them."
            },
            {
                id: "dbms12",
                question: "What is a 'Relation' in a database?",
                answer: "In a relational model, a 'Relation' is a two-dimensional table that contains data arranged in rows and columns."
            },
            {
                id: "dbms13",
                question: "What is an Attribute?",
                answer: "An attribute is a column or field in a relational table that represents a specific property or characteristic of the data (e.g., 'Name' or 'Age')."
            },
            {
                id: "dbms14",
                question: "What is a Tuple?",
                answer: "A tuple is a single row or record in a relational table, containing a complete set of related data."
            },
            {
                id: "dbms15",
                question: "What is a Domain?",
                answer: "A domain is the set of all valid, permissible values from which an attribute can take its values (e.g., a domain for 'Gender' might be just 'M' or 'F')."
            },
            {
                id: "dbms16",
                question: "What is the Degree of a relation?",
                answer: "The degree of a relation is the total number of attributes (columns) present in that table."
            },
            {
                id: "dbms17",
                question: "What is the Cardinality of a relation?",
                answer: "The cardinality of a relation is the total number of tuples (rows) present in that table."
            },
            {
                id: "dbms18",
                question: "If a table has 4 columns and 15 rows, what is its degree?",
                answer: "The degree of the table is 4."
            },
            {
                id: "dbms19",
                question: "If a table has 4 columns and 15 rows, what is its cardinality?",
                answer: "The cardinality of the table is 15."
            },
            {
                id: "dbms20",
                question: "Can two tuples in a strict relational model be exactly identical?",
                answer: "No, in a strictly relational model, all tuples must be unique to avoid data duplication."
            },
            
            // Keys in Database (Page 37)
            {
                id: "dbms21",
                question: "What is a Key in a database?",
                answer: "A key is an attribute or a combination of attributes used to uniquely identify a tuple (row) in a relation."
            },
            {
                id: "dbms22",
                question: "What is a Primary Key?",
                answer: "A primary key is an attribute that uniquely identifies each row in a table. It cannot contain duplicate or NULL values."
            },
            {
                id: "dbms23",
                question: "What is a Candidate Key?",
                answer: "Any attribute or combination of attributes that has the potential to act as a primary key (unique and not null) is called a candidate key."
            },
            {
                id: "dbms24",
                question: "What is an Alternate Key?",
                answer: "Out of all the candidate keys, the one chosen as the main identifier is the primary key. The remaining candidate keys are called alternate keys."
            },
            {
                id: "dbms25",
                question: "What is a Foreign Key?",
                answer: "A foreign key is an attribute in one table that links to the primary key of another table, establishing a relationship between the two."
            },
            {
                id: "dbms26",
                question: "How many primary keys can a single table have?",
                answer: "A table can have only one primary key, although that key can be made up of multiple columns (Composite Key)."
            },
            {
                id: "dbms27",
                question: "Can a primary key contain a NULL value?",
                answer: "No, a primary key must always have a definite, unique value. It cannot be left empty (NULL)."
            },
            {
                id: "dbms28",
                question: "Does a Foreign Key always have to be unique?",
                answer: "No, foreign keys can have duplicate values because multiple rows in a child table can link to a single row in the parent table."
            },
            {
                id: "dbms29",
                question: "Can a foreign key contain NULL values?",
                answer: "Yes, unless explicitly restricted by constraints, a foreign key can contain NULL values."
            },
            {
                id: "dbms30",
                question: "What is referential integrity?",
                answer: "It is a rule stating that a foreign key value must match an existing primary key value in the linked table or be NULL, preventing 'orphan' records."
            },
            
            // SQL Data Types & DDL (Page 37-39)
            {
                id: "dbms31",
                question: "What does SQL stand for?",
                answer: "SQL stands for Structured Query Language."
            },
            {
                id: "dbms32",
                question: "What is the purpose of SQL?",
                answer: "SQL is the standard language used to communicate with, manage, and manipulate data within relational databases."
            },
            {
                id: "dbms33",
                question: "What is DDL?",
                answer: "DDL (Data Definition Language) includes commands used to define or alter the structure of the database and its tables (e.g., CREATE, ALTER, DROP)."
            },
            {
                id: "dbms34",
                question: "What is DML?",
                answer: "DML (Data Manipulation Language) includes commands used to insert, modify, or delete the actual data inside the tables (e.g., INSERT, UPDATE, DELETE)."
            },
            {
                id: "dbms35",
                question: "Classify these commands into DDL and DML: DROP, INSERT, CREATE, UPDATE.",
                answer: "DDL: CREATE, DROP. DML: INSERT, UPDATE."
            },
            {
                id: "dbms36",
                question: "What does the int data type store?",
                answer: "It stores whole numbers (integers) without any decimal points, such as 10, -5, or 1000."
            },
            {
                id: "dbms37",
                question: "What does the float data type store?",
                answer: "It stores floating-point numbers, which are numbers containing decimal points, such as 10.5 or -3.14."
            },
            {
                id: "dbms38",
                question: "Differentiate between char(n) and varchar(n).",
                answer: "char(n) is a fixed-length string that pads empty spaces if the data is shorter than n. varchar(n) is a variable-length string that only uses the space needed."
            },
            {
                id: "dbms39",
                question: "What is the standard format for the date data type in MySQL?",
                answer: "The standard format is 'YYYY-MM-DD' (Year-Month-Day)."
            },
            {
                id: "dbms40",
                question: "Write the command to create a new database named 'School'.",
                answer: "CREATE DATABASE School;"
            },
            {
                id: "dbms41",
                question: "Which command is used to open an existing database to work inside it?",
                answer: "USE School;"
            },
            {
                id: "dbms42",
                question: "Write a query to create a simple 'Emp' table with ID and Name.",
                answer: "CREATE TABLE Emp (ID int, Name varchar(30));"
            },
            {
                id: "dbms43",
                question: "Which command displays the structure (columns, types, keys) of a table?",
                answer: "DESCRIBE table_name; or DESC table_name;"
            },
            {
                id: "dbms44",
                question: "How do you add a new column 'Age' of type INT to table 'Student'?",
                answer: "ALTER TABLE Student ADD Age INT;"
            },
            {
                id: "dbms45",
                question: "How do you remove an existing column 'Age' from the table 'Student'?",
                answer: "ALTER TABLE Student DROP Age;"
            },
            
            // Python with MySQL (Page 43-44)
            {
                id: "dbms46",
                question: "Which Python library is most commonly used to connect Python with MySQL?",
                answer: "The mysql.connector library is widely used for this purpose."
            },
            {
                id: "dbms47",
                question: "How do you import the MySQL connector in a Python script?",
                answer: "import mysql.connector"
            },
            {
                id: "dbms48",
                question: "Which function is used to establish a connection to the database?",
                answer: "The connect() function (e.g., mysql.connector.connect())."
            },
            {
                id: "dbms49",
                question: "What is a 'Cursor' in Python database connectivity?",
                answer: "A cursor is a temporary memory area/object used to execute SQL statements and fetch data from the database into Python."
            },
            {
                id: "dbms50",
                question: "Which method runs the SQL query inside Python?",
                answer: "The execute() method of the cursor object (e.g., cursor.execute('SELECT * FROM Emp'))."
            }
        ]
    },

    // ===== CHAPTER 10: COMPUTER SYSTEMS & ORGANISATION (50 Questions) =====
    computerSystems: {
        chapterName: "Computer Systems & Organisation",
        questions: [
            // Page 57-58
            {
                id: "cs1",
                question: "What are the main components of a computer system?",
                answer: "A computer consists of a Central Processing Unit (CPU), Memory (Primary and Secondary), and Input/Output (I/O) devices."
            },
            {
                id: "cs2",
                question: "What is the function of the ALU in a CPU?",
                answer: "The Arithmetic Logic Unit (ALU) performs all mathematical calculations (addition, subtraction) and logical comparisons (greater than, equal to)."
            },
            {
                id: "cs3",
                question: "What is the main difference between RAM and ROM?",
                answer: "RAM (Random Access Memory) is temporary/volatile and loses data when power goes off. ROM (Read-Only Memory) is permanent/non-volatile and stores startup instructions."
            },
            {
                id: "cs4",
                question: "What is cache memory?",
                answer: "It is a very high-speed memory placed between the CPU and RAM. It stores frequently used data to speed up processing."
            },
            {
                id: "cs5",
                question: "Arrange these memory units from smallest to largest: MB, Byte, KB, GB, Bit.",
                answer: "Bit < Byte < KB < MB < GB."
            },
            {
                id: "cs6",
                question: "What is a Nibble?",
                answer: "A group of 4 bits is called a nibble. It is exactly half of a byte (which is 8 bits)."
            },
            {
                id: "cs7",
                question: "How many bytes make up 1 Kilobyte (KB)?",
                answer: "1 Kilobyte (KB) is equal to 1024 bytes (or 2^10 bytes)."
            },
            {
                id: "cs8",
                question: "Differentiate between hardware and software.",
                answer: "Hardware refers to the physical, touchable parts of a computer (like a monitor or keyboard). Software is the set of instructions or programs that tell the hardware what to do."
            },
            {
                id: "cs9",
                question: "Give two examples of secondary memory.",
                answer: "Hard Disk Drives (HDD), Solid State Drives (SSD), and Pen drives. They are used for permanent bulk storage."
            },
            {
                id: "cs10",
                question: "What is the role of the Control Unit (CU)?",
                answer: "The CU acts as the central nervous system of the computer. It directs the flow of data and instructions between the CPU, memory, and I/O devices."
            },
            
            // Types of Software (Page 57-58)
            {
                id: "cs11",
                question: "What is system software?",
                answer: "System software acts as a bridge between computer hardware and the user/applications. Example: Operating Systems like Windows."
            },
            {
                id: "cs12",
                question: "What are device drivers?",
                answer: "Device drivers are special system software programs that allow the Operating System to communicate effectively with hardware devices (like a printer or scanner)."
            },
            {
                id: "cs13",
                question: "What is the difference between a compiler and an interpreter?",
                answer: "A compiler translates the entire program into machine code all at once, while an interpreter translates and executes the code line-by-line."
            },
            {
                id: "cs14",
                question: "What is an assembler?",
                answer: "An assembler is a language translator that converts low-level assembly language (using mnemonics like ADD, SUB) into machine language (0s and 1s)."
            },
            {
                id: "cs15",
                question: "What is application software?",
                answer: "Application software is designed to perform specific tasks for the user, such as typing a document (MS Word) or browsing the internet (Google Chrome)."
            },
            {
                id: "cs16",
                question: "What are system utilities?",
                answer: "Utilities are housekeeping programs that help maintain, optimize, and protect the computer system. Examples: Antivirus software and Disk Defragmenters."
            },
            
            // Operating System (Page 58)
            {
                id: "cs17",
                question: "What is an Operating System (OS)?",
                answer: "An OS is the core system software that manages hardware resources and provides a user interface to interact with the computer."
            },
            {
                id: "cs18",
                question: "Name two primary functions of an Operating System.",
                answer: "1. Memory Management (allocating RAM to programs) and 2. Process Management (deciding which task runs on the CPU)."
            },
            {
                id: "cs19",
                question: "What is an OS User Interface?",
                answer: "It is the visual or command-based mechanism through which a user interacts with the computer system (e.g., clicking icons or typing commands)."
            },
            {
                id: "cs20",
                question: "Give an example of a GUI and a CLI Operating System.",
                answer: "Windows and macOS use a GUI (Graphical User Interface). MS-DOS uses a CLI (Command Line Interface)."
            },
            {
                id: "cs21",
                question: "What is multitasking in an OS?",
                answer: "Multitasking is the ability of an operating system to run multiple applications simultaneously, like listening to music while typing a document."
            },
            
            // Boolean Logic (Page 58-59)
            {
                id: "cs22",
                question: "What is a Boolean expression?",
                answer: "A mathematical expression that evaluates to only one of two possible values: True (1) or False (0)."
            },
            {
                id: "cs23",
                question: "What does the AND gate do?",
                answer: "An AND gate outputs True (1) only if all of its inputs are True (1). Otherwise, the output is False (0)."
            },
            {
                id: "cs24",
                question: "What does the OR gate do?",
                answer: "An OR gate outputs True (1) if at least one of its inputs is True (1). It only outputs False if all inputs are False."
            },
            {
                id: "cs25",
                question: "What is the function of a NOT gate?",
                answer: "It acts as an inverter. It changes a True (1) input into False (0), and a False (0) input into True (1)."
            },
            {
                id: "cs26",
                question: "Why are NAND and NOR called 'Universal Gates'?",
                answer: "Because any logical function or basic logic gate (AND, OR, NOT) can be created using only NAND gates or only NOR gates."
            },
            {
                id: "cs27",
                question: "What is De Morgan's First Law?",
                answer: "The complement of a logical product is the sum of the complements: \u00ac(A \u00b7 B) = \u00acA + \u00acB."
            },
            {
                id: "cs28",
                question: "What is an XOR (Exclusive OR) gate?",
                answer: "An XOR gate outputs True (1) only when its inputs are different (one is 1, the other is 0)."
            },
            
            // Number Systems (Page 59)
            {
                id: "cs29",
                question: "What is the base (or radix) of Binary, Octal, Decimal, and Hexadecimal systems?",
                answer: "Binary is Base-2, Octal is Base-8, Decimal is Base-10, and Hexadecimal is Base-16."
            },
            {
                id: "cs30",
                question: "Which digits/symbols are used in the Hexadecimal number system?",
                answer: "It uses digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15)."
            },
            {
                id: "cs31",
                question: "Why do computers use the Binary number system?",
                answer: "Computer circuits run on electricity, which naturally has two states: ON (High voltage, represented by 1) and OFF (Low voltage, represented by 0)."
            },
            {
                id: "cs32",
                question: "Convert the binary number (1010) to decimal.",
                answer: "(1 \u00d7 2^3) + (0 \u00d7 2^2) + (1 \u00d7 2^1) + (0 \u00d7 2^0) = 8 + 0 + 2 + 0 = (10) in decimal."
            },
            {
                id: "cs33",
                question: "How do you convert a decimal number to binary?",
                answer: "By repeatedly dividing the decimal number by 2 and recording the remainders from bottom to top."
            },
            {
                id: "cs34",
                question: "Convert the decimal number 13 to binary.",
                answer: "13 / 2 = 6 (rem 1); 6 / 2 = 3 (rem 0); 3 / 2 = 1 (rem 1); 1 / 2 = 0 (rem 1). Reading remainders upwards gives (1101) in binary."
            },
            {
                id: "cs35",
                question: "How many binary bits are required to represent one Octal digit?",
                answer: "3 bits are required. For example, the maximum octal digit 7 is written as (111) in binary."
            },
            {
                id: "cs36",
                question: "How many binary bits are required to represent one Hexadecimal digit?",
                answer: "4 bits are required. For example, the maximum hexadecimal digit F (15) is written as (1111) in binary."
            },
            
            // Encoding Schemes (Page 59)
            {
                id: "cs37",
                question: "What is an encoding scheme?",
                answer: "It is a set of rules that assigns a unique binary code to each alphanumeric character and symbol, allowing computers to store and transmit text."
            },
            {
                id: "cs38",
                question: "What does ASCII stand for?",
                answer: "ASCII stands for American Standard Code for Information Interchange. It originally used 7 bits to represent 128 English characters and symbols."
            },
            {
                id: "cs39",
                question: "What is ISCII?",
                answer: "ISCII stands for Indian Script Code for Information Interchange. It is an 8-bit encoding scheme used to represent characters of various Indian local languages."
            },
            {
                id: "cs40",
                question: "Why was UNICODE introduced?",
                answer: "ASCII only supported English. UNICODE was created as a universal standard to represent letters, symbols, and emojis for almost every language in the world."
            }
        ]
    },

    // ===== CHAPTER 11: PROBLEM SOLVING (25 Questions) =====
    problemSolving: {
        chapterName: "Problem Solving",
        questions: [
            {
                id: "ps1",
                question: "What are the steps in problem solving?",
                answer: "Analyzing the problem, developing an algorithm, coding, testing, and debugging."
            },
            {
                id: "ps2",
                question: "What is an algorithm?",
                answer: "A step-by-step procedure or set of rules to be followed in calculations or other problem-solving operations."
            },
            {
                id: "ps3",
                question: "What is a flowchart?",
                answer: "A graphical representation of an algorithm using standard symbols like ovals, diamonds, and rectangles."
            },
            {
                id: "ps4",
                question: "What is pseudocode?",
                answer: "An informal high-level description of an operating principle of a computer program or algorithm."
            },
            {
                id: "ps5",
                question: "What is decomposition in problem solving?",
                answer: "Breaking down a complex problem into smaller, more manageable parts or sub-problems."
            },
            {
                id: "ps6",
                question: "What is debugging?",
                answer: "The process of identifying and removing errors from computer hardware or software."
            },
            {
                id: "ps7",
                question: "Which flowchart symbol is used for start/stop?",
                answer: "An oval (terminator) symbol."
            },
            {
                id: "ps8",
                question: "Which flowchart symbol is used for input/output?",
                answer: "A parallelogram."
            },
            {
                id: "ps9",
                question: "Which flowchart symbol is used for processing?",
                answer: "A rectangle."
            },
            {
                id: "ps10",
                question: "Which flowchart symbol is used for decision making?",
                answer: "A diamond symbol."
            }
        ]
    },

    // ===== CHAPTER 12: STRINGS & TUPLES (30 Questions) =====
    stringsTuples: {
        chapterName: "Strings & Tuples",
        questions: [
            // Strings (Page 24-25)
            {
                id: "st1",
                question: "What is String Indexing?",
                answer: "Accessing a specific character in a string using its position (starting from 0)."
            },
            {
                id: "st2",
                question: "What is Negative Indexing?",
                answer: "Accessing characters from the end of the string (starting from -1)."
            },
            {
                id: "st3",
                question: "What is String Slicing?",
                answer: "Extracting a part of a string using the syntax string[start:stop:step]."
            },
            {
                id: "st4",
                question: "What does len() do for a string?",
                answer: "Returns the total number of characters in the string."
            },
            {
                id: "st5",
                question: "What is String Concatenation?",
                answer: "Joining two or more strings together using the + operator."
            },
            {
                id: "st6",
                question: "What is String Repetition?",
                answer: "Repeating a string a certain number of times using the * operator."
            },
            {
                id: "st7",
                question: "What does s.capitalize() do?",
                answer: "Converts the first character of the string to uppercase."
            },
            {
                id: "st8",
                question: "What is the difference between lower() and isupper()?",
                answer: "lower() converts a string to lowercase; isupper() checks if the string is already in uppercase."
            },
            {
                id: "st9",
                question: "What does s.find('x') return if 'x' is not in the string?",
                answer: "It returns -1."
            },
            {
                id: "st10",
                question: "What does isalnum() check?",
                answer: "Checks if all characters in the string are alphanumeric (letters or numbers)."
            },
            {
                id: "st11",
                question: "What is the difference between lstrip(), rstrip(), and strip()?",
                answer: "lstrip() removes leading spaces, rstrip() removes trailing spaces, and strip() removes both."
            },
            {
                id: "st12",
                question: "What does s.replace('a', 'b') do?",
                answer: "Returns a new string where all occurrences of 'a' are replaced by 'b'."
            },
            {
                id: "st13",
                question: "What does s.split() do?",
                answer: "Breaks a string into a list of strings based on a separator (default is space)."
            },
            
            // Tuples (Page 25-26)
            {
                id: "st14",
                question: "How do you define a tuple with a single element?",
                answer: "t = (5,) (the comma is mandatory)."
            },
            {
                id: "st15",
                question: "Why are tuples called 'Faster than Lists'?",
                answer: "Because they are immutable, Python can optimize memory allocation for them."
            },
            {
                id: "st16",
                question: "Can you change an element in a tuple?",
                answer: "No, tuples are immutable."
            },
            {
                id: "st17",
                question: "What is Tuple Assignment?",
                answer: "Assigning a tuple of values to a tuple of variables (e.g., x, y = 10, 20)."
            },
            {
                id: "st18",
                question: "What does tuple('abc') return?",
                answer: "('a', 'b', 'c')."
            },
            {
                id: "st19",
                question: "Can a tuple be used as a key in a dictionary?",
                answer: "Yes, because tuples are immutable."
            },
            {
                id: "st20",
                question: "What happens if you try to sort() a tuple?",
                answer: "Tuples do not have a .sort() method. You must use sorted(tuple_name), which returns a list."
            }
        ]
    }
};

// Initialize bookmarks from localStorage
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
