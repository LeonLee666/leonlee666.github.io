// DBLP Conference Categories Configuration
const categoriesConfig = [
    {
        name: "数据库/数据挖掘/内容检索",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "SIGMOD", value: "conf/SIGMOD", hasAssociatedJournal: true, associatedJournalValue: "journals/pacmmod" },
                    { label: "SIGKDD", value: "conf/SIGKDD" },
                    { label: "ICDE", value: "conf/ICDE" },
                    { label: "SIGIR", value: "conf/SIGIR" },
                    { label: "VLDB", value: "conf/VLDB", hasAssociatedJournal: true, associatedJournalValue: "journals/pvldb" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "CIKM", value: "conf/CIKM" },
                    { label: "WSDM", value: "conf/WSDM" },
                    { label: "PODS", value: "conf/PODS" },
                    { label: "DASFAA", value: "conf/DASFAA" },
                    { label: "ECML-PKDD", value: "conf/ecml", hasAssociatedJournal: true, associatedJournalValue: "conf/pkdd" },
                    { label: "ISWC", value: "conf/ISWC" },
                    { label: "ICDM", value: "conf/ICDM" },
                    { label: "ICDT", value: "conf/ICDT" },
                    { label: "EDBT", value: "conf/EDBT" },
                    { label: "CIDR", value: "conf/CIDR" },
                    { label: "SDM", value: "conf/SDM" },
                    { label: "RecSys", value: "conf/RecSys" }
                ]
            }
        ]
    },
    {
        name: "计算机体系结构/并行与分布计算/存储系统",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "PPoPP", value: "conf/PPoPP" },
                    { label: "FAST", value: "conf/FAST" },
                    { label: "DAC", value: "conf/DAC" },
                    { label: "HPCA", value: "conf/HPCA" },
                    { label: "MICRO", value: "conf/MICRO" },
                    { label: "SC", value: "conf/SC" },
                    { label: "ASPLOS", value: "conf/ASPLOS" },
                    { label: "ISCA", value: "conf/ISCA" },
                    { label: "USENIX ATC", value: "conf/usenix" },
                    { label: "EuroSys", value: "conf/EuroSys" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "SoCC", value: "conf/SoCC" },
                    { label: "SPAA", value: "conf/SPAA" },
                    { label: "PODC", value: "conf/PODC" },
                    { label: "FPGA", value: "conf/FPGA" },
                    { label: "CGO", value: "conf/CGO" },
                    { label: "DATE", value: "conf/DATE" },
                    { label: "HOT CHIPS", value: "conf/HOTCHIPS" },
                    { label: "CLUSTER", value: "conf/CLUSTER" },
                    { label: "ICCD", value: "conf/ICCD" },
                    { label: "ICCAD", value: "conf/ICCAD" },
                    { label: "ICDCS", value: "conf/ICDCS" },
                    { label: "CODES+ISSS", value: "conf/CODESISSS" },
                    { label: "HiPEAC", value: "conf/HiPEAC" },
                    { label: "SIGMETRICS", value: "conf/SIGMETRICS" },
                    { label: "PACT", value: "conf/PACT" },
                    { label: "ICPP", value: "conf/ICPP" },
                    { label: "ICS", value: "conf/ICS" },
                    { label: "VEE", value: "conf/VEE" },
                    { label: "IPDPS", value: "conf/IPDPS" },
                    { label: "Performance", value: "conf/Performance" },
                    { label: "HPDC", value: "conf/HPDC" },
                    { label: "ITC", value: "conf/ITC" },
                    { label: "LISA", value: "conf/LISA" },
                    { label: "MSST", value: "conf/MSST" },
                    { label: "RTAS", value: "conf/RTAS" },
                    { label: "Euro-Par", value: "conf/EuroPar" }
                ]
            }
        ]
    },    
    {
        name: "计算机网络",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "SIGCOMM", value: "conf/SIGCOMM" },
                    { label: "MobiCom", value: "conf/MobiCom" },
                    { label: "INFOCOM", value: "conf/INFOCOM" },
                    { label: "NSDI", value: "conf/NSDI" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "SenSys", value: "conf/SenSys" },
                    { label: "CoNEXT", value: "conf/CoNEXT" },
                    { label: "SECON", value: "conf/SECON" },
                    { label: "IPSN", value: "conf/IPSN" },
                    { label: "MobiSys", value: "conf/MobiSys" },
                    { label: "ICNP", value: "conf/ICNP" },
                    { label: "MobiHoc", value: "conf/MobiHoc" },
                    { label: "NOSSDAV", value: "conf/NOSSDAV" },
                    { label: "IWQoS", value: "conf/IWQoS" },
                    { label: "IMC", value: "conf/IMC" }
                ]
            }
        ]
    },
    {
        name: "人工智能",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "AAAI", value: "conf/AAAI" },
                    { label: "NeurIPS", value: "conf/NeurIPS" },
                    { label: "ACL", value: "conf/ACL" },
                    { label: "CVPR", value: "conf/CVPR" },
                    { label: "ICCV", value: "conf/ICCV" },
                    { label: "ICML", value: "conf/ICML" },
                    { label: "IJCAI", value: "conf/IJCAI" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "COLT", value: "conf/COLT" },
                    { label: "EMNLP", value: "conf/EMNLP" },
                    { label: "ECAI", value: "conf/ECAI" },
                    { label: "ECCV", value: "conf/ECCV" },
                    { label: "ICRA", value: "conf/ICRA" },
                    { label: "ICAPS", value: "conf/ICAPS" },
                    { label: "ICCBR", value: "conf/ICCBR" },
                    { label: "COLING", value: "conf/COLING" },
                    { label: "KR", value: "conf/KR" },
                    { label: "UAI", value: "conf/UAI" },
                    { label: "AAMAS", value: "conf/AAMAS" },
                    { label: "PPSN", value: "conf/PPSN" },
                    { label: "NAACL", value: "conf/NAACL" }
                ]
            }
        ]
    },    
    {
        name: "网络与信息安全",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "CCS", value: "conf/CCS" },
                    { label: "EUROCRYPT", value: "conf/EUROCRYPT" },
                    { label: "S&P", value: "conf/SP" },
                    { label: "CRYPTO", value: "conf/CRYPTO" },
                    { label: "USENIX Security", value: "conf/uss" },
                    { label: "NDSS", value: "conf/NDSS" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "ACSAC", value: "conf/ACSAC" },
                    { label: "ASIACRYPT", value: "conf/ASIACRYPT" },
                    { label: "ESORICS", value: "conf/ESORICS" },
                    { label: "FSE (Fast Software Encryption)", value: "conf/FSE" },
                    { label: "CSFW", value: "conf/CSFW" },
                    { label: "SRDS", value: "conf/SRDS" },
                    { label: "CHES", value: "conf/CHES" },
                    { label: "DSN", value: "conf/DSN" },
                    { label: "RAID", value: "conf/RAID" },
                    { label: "PKC", value: "conf/PKC" },
                    { label: "TCC", value: "conf/TCC" }
                ]
            }
        ]
    },
    {
        name: "软件工程/系统软件/程序设计语言",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "PLDI", value: "conf/PLDI" },
                    { label: "POPL", value: "conf/POPL" },
                    { label: "FSE (Software Engineering)", value: "conf/sigsoft" },
                    { label: "SOSP", value: "conf/SOSP" },
                    { label: "OOPSLA", value: "conf/OOPSLA" },
                    { label: "ASE", value: "conf/ASE" },
                    { label: "ICSE", value: "conf/ICSE" },
                    { label: "ISSTA", value: "conf/ISSTA" },
                    { label: "OSDI", value: "conf/OSDI" },
                    { label: "FM", value: "conf/FM" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "ECOOP", value: "conf/ECOOP" },
                    { label: "ETAPS", value: "conf/ETAPS" },
                    { label: "ICPC", value: "conf/ICPC" },
                    { label: "RE", value: "conf/RE" },
                    { label: "CAiSE", value: "conf/CAiSE" },
                    { label: "ICFP", value: "conf/ICFP" },
                    { label: "LCTES", value: "conf/LCTES" },
                    { label: "MoDELS", value: "conf/MoDELS" },
                    { label: "CP", value: "conf/CP" },
                    { label: "ICSOC", value: "conf/ICSOC" },
                    { label: "SANER", value: "conf/SANER" },
                    { label: "ICSME", value: "conf/ICSME" },
                    { label: "VMCAI", value: "conf/VMCAI" },
                    { label: "ICWS", value: "conf/ICWS" },
                    { label: "Middleware", value: "conf/Middleware" },
                    { label: "SAS", value: "conf/SAS" },
                    { label: "ESEM", value: "conf/ESEM" },
                    { label: "ISSRE", value: "conf/ISSRE" },
                    { label: "HotOS", value: "conf/HotOS" }
                ]
            }
        ]
    },
    {
        name: "计算机科学理论",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "STOC", value: "conf/STOC" },
                    { label: "SODA", value: "conf/SODA" },
                    { label: "CAV", value: "conf/CAV" },
                    { label: "FOCS", value: "conf/FOCS" },
                    { label: "LICS", value: "conf/LICS" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "SoCG", value: "conf/SoCG" },
                    { label: "ESA", value: "conf/ESA" },
                    { label: "CCC", value: "conf/CCC" },
                    { label: "ICALP", value: "conf/ICALP" },
                    { label: "CADE/IJCAR", value: "conf/CADE" },
                    { label: "CONCUR", value: "conf/CONCUR" },
                    { label: "HSCC", value: "conf/HSCC" },
                    { label: "SAT", value: "conf/SAT" },
                    { label: "COCOON", value: "conf/COCOON" }
                ]
            }
        ]
    },
    {
        name: "计算机图形学与多媒体",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "ACM MM", value: "conf/MM" },
                    { label: "SIGGRAPH", value: "conf/SIGGRAPH" },
                    { label: "VR", value: "conf/VR" },
                    { label: "IEEE VIS", value: "conf/VIS" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "ICMR", value: "conf/ICMR" },
                    { label: "SI3D", value: "conf/SI3D" },
                    { label: "SCA", value: "conf/SCA" },
                    { label: "DCC", value: "conf/DCC" },
                    { label: "EG", value: "conf/EG" },
                    { label: "EuroVis", value: "conf/EuroVis" },
                    { label: "SGP", value: "conf/SGP" },
                    { label: "EGSR", value: "conf/EGSR" },
                    { label: "ICASSP", value: "conf/ICASSP" },
                    { label: "ICME", value: "conf/ICME" },
                    { label: "ISMAR", value: "conf/ISMAR" },
                    { label: "PG", value: "conf/PG" },
                    { label: "SPM", value: "conf/SPM" }
                ]
            }
        ]
    },
    {
        name: "人机交互与普适计算",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "CSCW", value: "conf/CSCW" },
                    { label: "CHI", value: "conf/CHI" },
                    { label: "UbiComp", value: "conf/UbiComp" },
                    { label: "UIST", value: "conf/UIST" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "GROUP", value: "conf/GROUP" },
                    { label: "IUI", value: "conf/IUI" },
                    { label: "ISS", value: "conf/ISS" },
                    { label: "ECSCW", value: "conf/ECSCW" },
                    { label: "PERCOM", value: "conf/PERCOM" },
                    { label: "MobileHCI", value: "conf/MobileHCI" },
                    { label: "ICWSM", value: "conf/ICWSM" }
                ]
            }
        ]
    },
    {
        name: "交叉/综合/新兴",
        categories: [
            {
                name: "CCF-A 类会议:",
                level: "A",
                options: [
                    { label: "WWW", value: "conf/WWW" },
                    { label: "RTSS", value: "conf/RTSS" },
                    { label: "WINE", value: "conf/WINE" }
                ]
            },
            {
                name: "CCF-B 类会议:",
                level: "B",
                options: [
                    { label: "CogSci", value: "conf/CogSci" },
                    { label: "BIBM", value: "conf/BIBM" },
                    { label: "EMSOFT", value: "conf/EMSOFT" },
                    { label: "ISMB", value: "conf/ISMB" },
                    { label: "RECOMB", value: "conf/RECOMB" },
                    { label: "MICCAI", value: "conf/MICCAI" }
                ]
            }
        ]
    }
]; 