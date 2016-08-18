function remove() {
    String str = "  Core Java jsp servlets             jdbc struts hibernate spring  ";
    
    String strWithoutSpace = str.replaceAll("\\s", "");

    document.write(strWithoutSpace);
}