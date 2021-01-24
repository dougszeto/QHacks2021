import React, {Component} from 'react';
import './Preferences.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';

function Preferences (){
    return (
        <table>
            <tr>
                <td className="personal-settings">
                
                    <h2>PERSONAL SETTINGS</h2>
                    <h3>About Me</h3>
                    <form>
                        <textarea rows="6" placeholder="Tell us about yourself, your household, what type of environment do you live in, etc."></textarea>
                    </form>
                   
                    <h3>Photos</h3>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <label className="photo">
                        <FontAwesomeIcon className="image-icon" icon={faImage}/>
                        <input type="file"
                        accept="image/png, image/jpeg">
                            
                        </input>
                    </label>
                    <br></br>
                    
                    
                </td>
                <td className="discovery-settings">
                    
                    <h2>DISCOVERY SETTINGS</h2>
                    <h3>Breeds</h3>
                        <table>
                            <tr>
                                <td>
                                        <label class="switch">
                                    <input type="checkbox"></input>
                                    <span class="slider round"></span>
                                        </label>
                                        <h4>All</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Beagle</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Retriever</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <label class="switch">
                                    <input type="checkbox"></input>
                                    <span class="slider round"></span>
                                        </label>
                                        <h4>Pug</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Poodle</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>German Shephard</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <label class="switch">
                                    <input type="checkbox"></input>
                                    <span class="slider round"></span>
                                        </label>
                                        <h4>Boxer</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Bulldog</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Border Collie</h4>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <label class="switch">
                                            <input type="checkbox"></input>
                                            <span class="slider round"></span>
                                        </label>
                                        <h4>Husky</h4>
                                </td>
                                <td>
                                    <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Pointer</h4>
                                </td>
                                <td>
                                    <h4>+ More</h4>
                                </td>
                            </tr>
                    </table>
                    <hr></hr>
                    <h3>Age range</h3>
                    <table>
                        <tr>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>0-1 year</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>1-3 years</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>3-6 years</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>6+ years</h4>
                            </td>
                        </tr>
                    </table>
                    
                    
                    <hr></hr>
                    <table>
                        <tr>
                            <td><h3>Activity level</h3></td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Low</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Med</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>High</h4>
                            </td>
                        </tr>
                    </table>
                    
                    
                    <hr></hr>
                    <table >
                        <tr>
                            <td className="kids">
                            <h3>Good with kids</h3>
                            </td>
                            <td>
                            <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                </label>
                            </td>
                        </tr>
                    </table>
                    <hr></hr>
                    <table>
                        <tr>
                            <td class="gender"><h3>Gender</h3></td>
                            <td class="male">
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Male</h4>
                            </td>
                            <td>
                                <label class="switch">
                                        <input type="checkbox"></input>
                                        <span class="slider round"></span>
                                    </label>
                                    <h4>Female</h4>
                            </td>
                        </tr>
                    </table>
                    <br></br><br></br>
                </td>
            </tr>
        </table>

    )
}
export default Preferences;