module.exports = {
    Damien_01:{
            emp_name:'Damien Hubert',
            id: 'Damien_01',
            manager_id:'',
            role:'CEO',
            showChildren:true,
            team_info:{
                team_status:true,
                team_name:'Rentomojo',
                teams:{
                    Hazel_02:{
                        emp_name:'Hazel Turner',
                        manager_id:'Damien_01',
                        id: 'Hazel_02',
                        role:'CXO',
                        showChildren:false,
                        team_info:{
                            team_status:true,
                            team_name:'Core Management',
                            teams:{},
                        }
                    },
                    Elia_03:{
                        emp_name:'Elia Andre',
                        manager_id:'Damien_01',
                        id:'Elia_03',
                        role:'CFO',
                        showChildren:true,
                        team_info:{
                            team_status:true,
                            team_name:'Core Management',
                            teams:{
                                Ruben_04:{
                                    emp_name:'Ruben Cario',
                                    manager_id:'Elia_03',
                                    id:'Ruben_04',
                                    role:'Head-Accounts & Payments',
                                    showChildren:true,
                                    team_info:{
                                        team_status:true,
                                        team_name:'Finance & Accounts',
                                        teams:{
                                            Vulia:{
                                                emp_name:'Vulia Cannes',
                                                manager_id:'Ruben_04',
                                                id:'Vulia',
                                                role:'Finance & Accounts',
                                                showChildren:false,
                                                team_info:{
                                                    team_status:true,
                                                    team_name:'Finance & Accounts',
                                                    teams:{
                                                        Ruben_04:{
                                                            emp_name:'Ruben Cario',
                                                            manager_id:'Elia_03',
                                                            id:'Ruben_04',
                                                            role:'Head-Accounts & Payments',
                                                            showChildren:false,
                                                            team_info:{
                                                                team_status:true,
                                                                team_name:'Finance & Accounts',
                                                                teams:{
                                                                },
                                                            }
                                                        },
                                                        ETC_07:{
                                                            emp_name:'ETC Cario',
                                                            manager_id:'Elia_03',
                                                            id:'ETC_07',
                                                            role:'some',
                                                            showChildren:false,
                                                            team_info:{
                                                                team_status:false,
                                                                team_name:'Finance & Accounts',
                                                                teams:{}
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                        },
                                    }
                                },
                                ETC_05:{
                                    emp_name:'ETC Cario',
                                    manager_id:'Elia_03',
                                    id:'ETC_05',
                                    role:'some',
                                    showChildren:false,
                                    team_info:{
                                        team_status:true,
                                        team_name:'Finance & Accounts',
                                        teams:{
                                            Hulia:{
                                                emp_name:'Hulia Cannes',
                                                manager_id:'Elia_03',
                                                id:'Hulia',
                                                role:'Finance & Accounts',
                                                showChildren:false,
                                                team_info:{
                                                    team_status:true,
                                                    team_name:'Finance & Accounts',
                                                    teams:{
                                                        Ruben_05:{
                                                            emp_name:'Ruben Maria',
                                                            manager_id:'Elia_03',
                                                            id:'Ruben_05',
                                                            role:'Head-Accounts & Payments',
                                                            showChildren:false,
                                                            team_info:{
                                                                team_status:true,
                                                                team_name:'Finance & Accounts',
                                                                teams:{
                                                                    
                                                                },
                                                            }
                                                        },
                                                        ETC_06:{
                                                            emp_name:'ETC Cario',
                                                            manager_id:'Elia_03',
                                                            id:'ETC_06',
                                                            role:'some',
                                                            showChildren:false,
                                                            team_info:{
                                                                team_status:true,
                                                                team_name:'Finance & Accounts',
                                                                teams:{}
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                        }
                                    }
                                }
                            }
                        }
                    },
                    Anita_06:{
                        emp_name:'Anita Wilson',
                        manager_id:'Damien_01',
                        id:'Anita_06',
                        role:'EA',
                        showChildren:false,
                        team_info:{
                            team_status:true,
                            team_name:'Core Management',
                            teams:{}
                        }
                    },
                    Willie_07:{
                        emp_name:'Willie Steward',
                        manager_id:'Damien_01',
                        id:'Willie_07',
                        role:'VP KYC',
                        showChildren:false,
                        team_info:{
                            team_status:true,
                            team_name:'KYC',
                            teams:{}
                        }
                    },
                }
            }
        }
}