// ============================================
// COMPLETE QUESTIONS DATABASE - ALL 6 CHAPTERS
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

    // ===== CHAPTER 3: SQL DATABASE (50 Questions) =====
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
    }
};

// Initialize bookmarks from localStorage
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
