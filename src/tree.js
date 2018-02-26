module.exports = {
	Damien_01:{
            emp_name:'Damien Hubert',
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
                        role:'CFO',
                        showChildren:true,
                        team_info:{
                            team_status:true,
                            team_name:'Core Management',
                            teams:{
                                Ruben_04:{
                                    emp_name:'Ruben Cario',
                                    manager_id:'Elia_03',
                                    role:'Head-Accounts & Payments',
                                    showChildren:false,
                                    team_info:{
                                        team_status:true,
                                        team_name:'Finance & Accounts',
                                        teams:{
                                        	Vulia:{
						                        emp_name:'Vulia Cannes',
						                        manager_id:'Ruben_04',
						                        role:'Finance & Accounts',
						                        showChildren:false,
						                        team_info:{
						                            team_status:true,
						                            team_name:'Finance & Accounts',
						                            teams:{
						                                Ruben_04:{
						                                    emp_name:'Ruben Cario',
						                                    manager_id:'Elia_03',
						                                    role:'Head-Accounts & Payments',
						                                    showChildren:false,
						                                    team_info:{
						                                        team_status:true,
						                                        team_name:'Finance & Accounts',
						                                        teams:{
						                                        	
						                                        },
						                                    }
						                                },
						                                ETC_05:{
						                                    emp_name:'ETC Cario',
						                                    manager_id:'Elia_03',
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
                    Anita_06:{
                        emp_name:'Anita Wilson',
                        manager_id:'Damien_01',
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