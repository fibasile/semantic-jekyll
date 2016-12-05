class Vimeo < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

    else
      raise "No Vimeo ID provided in the \"vimeo\" tag"
    end
  end

  def render(context)
    # "<iframe width=\"#{@width}\" height=\"#{@height}\" src=\"http://www.youtube.com/embed/#{@id}\" frameborder=\"0\"allowfullscreen></iframe>"
    "<div class=\"ui embed\" data-source=\"vimeo\" data-id=\"#{@id}\"></div>"
  end

  Liquid::Template.register_tag "vimeo", self
end
